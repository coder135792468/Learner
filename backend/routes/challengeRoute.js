import express from 'express';
import {
	addChallenge,
	updateChallenge,
	deleteChallenge,
	getAllChallenges,
	getChallengeById,
} from '../controller/challengeController.js';
import { protect } from '../middlerwares/auth.js';
const router = express.Router();

router.route('/').post(protect, addChallenge).get(protect, getAllChallenges);
router
	.route('/:id')
	.put(protect, updateChallenge)
	.delete(protect, deleteChallenge)
	.get(protect, getChallengeById);

export default router;
