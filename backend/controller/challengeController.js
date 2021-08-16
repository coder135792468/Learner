import Challenge from '../models/Challenge.js';
import asyncHandler from 'express-async-handler';

//@desc get All challenges
//@route GET /api/challenges/
//@acess private
const getAllChallenges = asyncHandler(async (req, res) => {
	try {
		const challenges = await Challenge.find({
			$or: [{ sender: req.user._id }, { receiver: req.user._id }],
		});

		res.json(challenges);
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Add a challenge
//@route POST /api/challenges/
//@acess private
const addChallenge = asyncHandler(async (req, res) => {
	try {
		const challenge = await new Challenge();
		challenge.sender = req.user._id;
		challenge.receiver = req.body.receiver;
		challenge.index = req.body.index;
		challenge.senderTime = req.body.senderTime;
		const savedChallenge = await challenge.save();
		res.json(savedChallenge);
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Get challenge
//@route GET /api/challenges/:id
//@acess private
const getChallengeById = asyncHandler(async (req, res) => {
	try {
		const challenge = await Challenge.findById(req.params.id);
		if (challenge) {
			return res.json(challenge);
		} else {
			return res.status(404).json({ message: 'Challenge not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//Wdesc Update challenge Data
//@route PUT /api/challenges/:id
//@acess private

const updateChallenge = asyncHandler(async (req, res) => {
	try {
		const challenge = await Challenge.findById(req.params.id);
		if (challenge) {
			challenge.receiverTime = req.body.receiverTime || challenge.receiverTime;
			challenge.accepted = req.body.accepted || challenge.accepted;
			challenge.end = req.body.end || challenge.end;
			const updatedChallenge = await challenge.save();
			res.json(updatedChallenge);
		} else {
			return res.status(404).json({ message: 'Challenge not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});

//@desc Delete a Challenge
//@droute DELETE /api/challenges/:id
//@acess private
const deleteChallenge = asyncHandler(async (req, res) => {
	try {
		const challenge = await Challenge.findById(req.params.id);
		if (challenge) {
			if (challenge.receiver.toString() === req.user._id.toString()) {
				return res
					.status(401)
					.json({ message: 'Only sender can Delete Challenge' });
			}
			if (
				challenge.sender.toString() === req.user._id.toString() &&
				challenge.end === true
			) {
				await challenge.remove();
				res.json({ message: 'CHallenge removed sucessfully!!!' });
			} else {
				return res
					.status(401)
					.json({ message: 'Challenge not expired yet!!!' });
			}
		} else {
			return res.status(404).json({ message: 'Challenge not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500);
		throw new Error('Server Error');
	}
});
export {
	getAllChallenges,
	getChallengeById,
	addChallenge,
	updateChallenge,
	deleteChallenge,
};
