import express from 'express';
import asyncHandler from 'express-async-handler';
import { sendMail } from '../utils/sendMail.js';
const router = express.Router();

router.route('/').post(
	asyncHandler(async (req, res) => {
		await sendMail(
			req.body.email,
			'codermighty@gmail.com',
			'FeedBack - Learner Website',
			`<b>${req.body.text}</b>`
		);
		res.json('Thanks for your feedback');
	})
);
export default router;
