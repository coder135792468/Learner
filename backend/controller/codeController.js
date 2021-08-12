import Code from '../models/Code.js';
import asyncHandler from 'express-async-handler';

//@desc get all codes
//@route GET /api/code/
//@acess public
const getAllCodes = asyncHandler(async (req, res) => {
	try {
		const codes = await Code.find({});
		res.json(codes);
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc get a code
//@route GET /api/code/:id
//@acess public
const getCodeById = asyncHandler(async (req, res) => {
	try {
		const code = await Code.findById(req.params.id);
		if (code) {
			return res.json(code);
		} else {
			return res.status(404).json({ message: 'Code not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc ADd a code
//@route POST /api/user/
//@acess private
const addCode = asyncHandler(async (req, res) => {
	try {
		const { name, lang, html, css, js } = req.body;
		const code = await Code.create({
			user: req.user._id,
			name,
			lang,
			html,
			css,
			js,
		});

		return res.status(201).json({ code });
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Delete a code
//@route DELETE /api/user/:id
//@acess private
const deleteCode = asyncHandler(async (req, res) => {
	try {
		const code = await Code.findById(req.params.id);
		if (code) {
			if (req.user._id.toString() !== code.user.toString()) {
				return res.status(404).json({
					message: 'Authorization failed',
				});
			}
			await code.remove();
			return res.json({
				message: 'Code Removed sucessfully',
			});
		} else {
			return res.status(404).json({
				message: 'Code not found',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Update a code
//@route PUT /api/user/:id
//@acess private
const updateCode = asyncHandler(async (req, res) => {
	try {
		const { name, html, css, js } = req.body;
		const code = await Code.findById(req.params.id);

		if (code) {
			if (req.user._id.toString() !== code.user.toString()) {
				return res.status(404).json({
					message: 'Authorization failed',
				});
			}
			code.name = name || 'Untitled';
			code.html = html;
			code.css = css;
			code.js = js;
			const savedcode = await code.save();
			return res.json(savedcode);
		} else {
			return res.status(404).json({
				message: 'Code not found',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@Desc Like a code
//@route Put /api/code/:id/like
//@acess private
const likeCode = asyncHandler(async (req, res) => {
	try {
		const code = await Code.findById(req.params.id);
		if (code) {
			if (
				code.likes.some(
					({ user }) => user.toString() === req.user._id.toString()
				)
			) {
				code.likes = code.likes.filter(
					({ user }) => user.toString() !== req.user._id.toString()
				);
			} else {
				code.likes.unshift({
					user: req.user._id,
					name: req.user.name,
					avatar: req.user.avatar,
				});
			}

			const likedCode = await code.save();

			return res.json(likedCode);
		} else {
			return res.status(404).json({
				message: 'Code not found',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Add Comment to Code
//@route PUT /pai/user/:id/comment
//@acess private
const addComment = asyncHandler(async (req, res) => {
	try {
		const code = await Code.findById(req.params.id);
		if (code) {
			const newComment = {
				text: req.body.text,
				name: req.user.name,
				user: req.user._id,
				avatar: req.user.avatar,
			};
			if (
				code.comments.some(
					(comment) => comment.user.toString() === req.user._id.toString()
				)
			) {
				return res.status(400).json({
					message: 'You have already given your feedback',
				});
			}

			code.comments.unshift(newComment);
			const commentedCode = await code.save();
			return res.json(commentedCode);
		} else {
			return res.status(404).json({ message: 'Code not found' });
		}
	} catch (error) {
		console.log(error.message);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@delete Code comment
//@route PUT /api/:id/comment/:commentID
//@acess private
const deleteComment = asyncHandler(async (req, res) => {
	try {
		const code = await Code.findById(req.params.id);
		if (code) {
			const comment = code.comments.find(
				(comment) => comment._id.toString() === req.params.commentID.toString()
			);

			if (!comment) {
				return res.status(404).json({
					message: 'Comment does not exists',
				});
			}
			if (comment.user.toString() !== req.user._id.toString()) {
				return res.status(401).json({
					message: 'User not authorized',
				});
			}

			code.comments = code.comments.filter(
				({ id }) => id !== req.params.commentID
			);
			const savedCode = await code.save();
			return res.json(savedCode);
		} else {
			return res.status(404).json({ message: 'Code not found' });
		}
	} catch (error) {
		console.log(error.message);
		res.status(500);
		throw new Error('Server Error');
	}
});

export {
	getAllCodes,
	getCodeById,
	addCode,
	deleteCode,
	updateCode,
	likeCode,
	addComment,
	deleteComment,
};
