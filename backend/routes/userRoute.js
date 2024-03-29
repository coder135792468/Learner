import express from 'express';
import {
	registerUser,
	loginUser,
	getAllUsers,
	getUserById,
	updateUser,
} from '../controller/userController.js';
import { protect } from '../middlerwares/auth.js';

const router = express.Router();
router.route('/').post(registerUser);
router.route('/allUsers').get(protect, getAllUsers);
router.route('/login').post(loginUser);
router.route('/profile').put(protect, updateUser);
router.route('/:id').get(getUserById);

export default router;
