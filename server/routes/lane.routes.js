import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Add
router.route('/lanes').post(LaneController.addLane);

// Get

router.route('/lanes').get(LaneController.getLanes);

// Delete

router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Edit 
router.route('/lanes/:laneId').put(LaneController.editLane);


export default router;
