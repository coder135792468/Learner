import mongoose from 'mongoose';

const codeSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
			default: 'Untitled',
		},
		lang: {
			type: String,
			required: true,
			default: 'web',
		},
		html: {
			type: String,
		},
		css: {
			type: String,
		},
		js: {
			type: String,
		},
		likes: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
				},
				name: {
					type: String,
				},
				avatar: {
					type: String,
				},
			},
		],
		comments: [
			{
				text: {
					type: String,
				},
				user: {
					type: mongoose.Schema.Types.ObjectId,
				},
				name: {
					type: String,
				},
				avatar: {
					type: String,
				},
			},
		],
	},
	{
		timestamp: true,
	}
);

const Code = mongoose.model('Code', codeSchema);
export default Code;
