import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createLaneRequest, fetchLanes, editLane, deleteLaneRequest, updateLaneRequest } from './LaneActions';
import { createNote, createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]),
});

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
  createLane: createLaneRequest,
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);