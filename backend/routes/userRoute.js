import express from 'express';
import {
	registerUser,
	loginUser,
	getAllUsers,
	getUserById,
	updateUser,
	verifyAccount,
	sendverifyAccount,
} from '../controller/userController.js';
import { protect } from '../middlerwares/auth.js';

const router = express.Router();
router.route('/').post(registerUser);
router.route('/verify').post(protect, sendverifyAccount);
router.route('/verify/:id').get(verifyAccount);
router.route('/allUsers').get(protect, getAllUsers);
router.route('/login').post(loginUser);
router.route('/profile').put(protect, updateUser);
router.route('/:id').get(getUserById);

export default router;
