import express from 'express';
import nodemailer from 'nodemailer';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/').post(
	asyncHandler(async (req, res) => {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD,
			},
		});
		var mailOptions = {
			from: req.body.email || 'user@example.com',
			to: 'codermighty@gmail.com',
			subject: 'FeedBack - Learner Website',
			html: `<b>${req.body.text}</b>`,
		};
		const send = await transporter.sendMail(mailOptions);
		console.log('Message sent: %s', send.messageId);
		res.json('Thanks for your feedback!!');
	})
);
export default router;
