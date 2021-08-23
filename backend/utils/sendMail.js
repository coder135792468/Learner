import nodemailer from 'nodemailer';

const sendMail = async (from, to, subject, html) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});
	var mailOptions = {
		from: from || 'user@example.com',
		to,
		subject,
		html,
	};
	const send = await transporter.sendMail(mailOptions);
	console.log('Message sent: %s', send.messageId);
};

export { sendMail };
