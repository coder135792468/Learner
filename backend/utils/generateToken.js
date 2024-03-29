import jwt from 'jsonwebtoken';

const generateToken = (id) => {
	try {
		return jwt.sign({ id }, process.env.JWT_SECRET, {
			expiresIn: '15d',
		});
	} catch (err) {
		console.log(err);
	}
};

export default generateToken;
