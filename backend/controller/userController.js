import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import { sendMail } from '../utils/sendMail.js';
//@desc Register a user with
//@route POST /api/user/
//@acess public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return res.status(401).json({
			message: 'Invalid data',
		});
	}
	if (
		name.trim().length === 0 ||
		email.trim().length === 0 ||
		password.trim().length === 0
	) {
		return res.status(401).json({
			message: 'All fields are required',
		});
	} else {
		const existUser = await User.findOne({ email });
		if (existUser) {
			return res.status(401).json({
				message: 'User already registered',
			});
		}
		try {
			const user = await User.create({ name, email, password });
			if (user) {
				const LINK = process.env.VERIFY_LINK + user._id;
				const linkbtn = '<a href=' + LINK + '>Verify Email</a>';
				await sendMail(
					'codermighty@gmail.com',
					user.email,
					'Account Verification',
					linkbtn
				);
				return res.status(201).json({
					_id: user._id,
					name: user.name,
					email: user.email,
					avatar: user.avatar,
					bio: user.bio,
					token: generateToken(user._id),
				});
			} else {
				return res.status(400).json({
					message: 'Invalid user data',
				});
			}
		} catch (error) {
			console.log(error);
			res.status(500);
			throw new Error('Server Error');
		}
	}
});

//@desc Login a User
//@route POST /api/user/login
//@acess public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		return res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			bio: user.bio,
			avatar: user.avatar,
			verified: user.verified || false,
			token: generateToken(user._id),
		});
	} else {
		return res.status(401).json({
			message: 'Invalid email or password',
		});
	}
});

//@desc Get all Users
//@route GET /api/user/
//@acess public
const getAllUsers = asyncHandler(async (req, res) => {
	try {
		const pageSize = 4;
		const page = Number(req.query.pageNumber) || 1;

		const count = await User.countDocuments({
			_id: { $not: { $eq: req.user._id } },
		});
		const users = await User.find({ _id: { $not: { $eq: req.user._id } } })
			.limit(pageSize)
			.skip(pageSize * (page - 1));

		res.json({ users, page, pages: Math.ceil(count / pageSize) });
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Get a user
//@route GET /api/user/:id
//@acess public
const getUserById = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select('-password -email');
		if (user) {
			res.json(user);
		} else {
			return res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Update a User Profile
//@route PUT /api/user/profile
//@acess private
const updateUser = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.user._id);
		if (user) {
			user.name = req.body.name || user.name;
			user.bio = req.body.bio || user.bio;
			user.email = req.body.email || user.email;
			user.avatar = req.body.avatar || user.avatar;
			if (req.body.password) {
				user.password = req.body.password;
			}
			user.token = generateToken(req.user._id);
			await user.save();
			return res.json({
				name: user.name,
				bio: user.bio,
				email: user.email,
				avatar: user.avatar,
				_id: user._id,
				token: generateToken(req.user._id),
			});
		} else {
			return res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Verify account of user
//@Route /api/user/verify/:id
//@acess public
const verifyAccount = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			user.verified = true;
			await user.save();
			return res.json({
				message: 'User verified sucessfully',
				info: 'Now login again to see your account verified',
			});
		} else {
			return res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

const sendverifyAccount = asyncHandler(async (req, res) => {
	try {
		const LINK = process.env.VERIFY_LINK + req.user._id;
		const linkbtn = '<a href=' + LINK + '>Verify Email</a>';
		await sendMail(
			'codermighty@gmail.com',
			req.user.email,
			'Account Verification',
			linkbtn
		);
		res.json({ message: 'Email send successfully' });
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});
export {
	registerUser,
	loginUser,
	getAllUsers,
	getUserById,
	updateUser,
	verifyAccount,
	sendverifyAccount,
};
