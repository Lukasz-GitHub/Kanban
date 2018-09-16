import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add
router.route('/notes').post(NoteController.addNote);

// Edit

router.route('/notes/:noteId').put(NoteController.editNote);

// Delete

router.route('/notes/:noteId').delete(NoteController.deleteNote);

export default router;
