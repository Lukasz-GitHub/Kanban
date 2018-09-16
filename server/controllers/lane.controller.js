import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';

// Add
export function addLane(req, res) {
    if (!req.body.name) {
      res.status(403).end();
    }

    const newLane = new Lane(req.body);

    newLane.notes = [];

    newLane.id = uuid();
    newLane.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
    });
}

// Edit

export function editLane(req, res) {
    Lane.findOneAndUpdate({ id: req.params.laneId }, { name: req.body.name }).exec(err => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).end();
    });
}

// Get
export function getLanes(req, res) {
    Lane.find().exec((err, lanes) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ lanes });
    });
}

// Delete
export function deleteLane(req, res) {
    Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
        if (err) {
        res.status(500).send(err);
      }
      
        const notes = lane.notes.map( lane => lane.id );
        Note.remove( { id: { $in: notes} }, err => {
            lane.remove(() => {
                res.status(200).end();
            });
        });  
    });
}
