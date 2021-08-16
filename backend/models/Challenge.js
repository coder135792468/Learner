import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
	sender: {
		type: mongoose.Schema.Types.ObjectId,
	},
	receiver: {
		type: mongoose.Schema.Types.ObjectId,
	},
	senderTime: {
		type: Number,
		default: 0,
	},
	receiverTime: {
		type: Number,
		default: 0,
	},
	accepted: {
		type: Boolean,
		default: false,
	},
	end: {
		type: Boolean,
		default: false,
	},
	index: {
		type: Number,
		default: 1,
	},
	time: {
		type: Date,
		default: Date.now(),
	},
});
const Challenge = mongoose.model('Challenge', challengeSchema);

export default Challenge;
