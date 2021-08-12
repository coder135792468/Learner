import express from 'express';
import {
	getAllCodes,
	getCodeById,
	addCode,
	deleteCode,
	updateCode,
	likeCode,
	addComment,
	deleteComment,
} from '../controller/codeController.js';
import { protect } from '../middlerwares/auth.js';
const router = express.Router();

router.route('/').post(protect, addCode).get(getAllCodes);
router
	.route('/:id')
	.get(getCodeById)
	.delete(protect, deleteCode)
	.put(protect, updateCode);
router.route('/:id/like').put(protect, likeCode);
router.route('/:id/comment').put(protect, addComment);
router.route('/:id/comment/:commentID').delete(protect, deleteComment);

export default router;
