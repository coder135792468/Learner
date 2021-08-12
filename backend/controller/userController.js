import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

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
	const users = await User.find({}).select('-password');
	res.json(users);
});

//@desc Get a user
//@route GET /api/user/:id
//@acess public
const getUserById = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select('-password');
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
export { registerUser, loginUser, getAllUsers, getUserById, updateUser };
