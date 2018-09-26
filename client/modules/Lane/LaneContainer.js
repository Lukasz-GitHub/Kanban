import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { deleteLane, updateLane, editLane, createLaneRequest } from './LaneActions';
import { createNote, createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]),
});

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
  createLane: createLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);