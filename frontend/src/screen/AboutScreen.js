import React, { useState } from 'react';
import {
	Paper,
	makeStyles,
	Typography,
	TextareaAutosize,
	TextField,
	Button,
} from '@material-ui/core';
import { PageHeader } from '../layouts';
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import { ValidateEmail } from '../utils';
import { useToasts } from 'react-toast-notifications';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
		overflow: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		position: 'absolute',
		top: '0px',
		left: '0px',
		zIndex: '-1',
	},
	text: {
		width: '80%',
		margin: 'auto',
		maxWidth: '500px',
	},
	feedback: {
		width: '100%',
		border: '1px solid #grey',
		outline: 'none',
		margin: '5px 3px',
	},
}));

const AboutScreen = () => {
	const classes = useStyles();
	const { addToast } = useToasts();

	const [email, setEmail] = useState('');
	const [feedback, setFeedback] = useState('');
	const [feedbackGiven, setFeedBackGiven] = useState(false);
	const sendFeedBack = async () => {
		const data = {
			email: email,
			text: feedback,
		};
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		if (email.trim().length > 0 && ValidateEmail(email)) {
			setFeedBackGiven(true);
			await axios.post('/api/feedback/', data, config);
		} else {
			addToast('Email not Valid', { appearance: 'error' });
		}
		setEmail('');
		setFeedback('');
	};

	return (
		<>
			<PageHeader title='FeedBack' />
			<Paper className={classes.root}>
				{!feedbackGiven ? (
					<Typography className={classes.text}>
						<h1 style={{ fontWeight: '300' }} align='center'>
							Give Feedback
						</h1>
						<TextField
							label='Enter your email'
							type='email'
							className={classes.feedback}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextareaAutosize
							aria-label='minimum height'
							minRows={4}
							maxRows={10}
							className={classes.feedback}
							placeholder='Enter feedback...'
							value={feedback}
							onChange={(e) => setFeedback(e.target.value)}
						/>
						<Button
							onClick={sendFeedBack}
							style={{ float: 'right' }}
							color='primary'
							variant='contained'
						>
							Send Feedback
						</Button>
					</Typography>
				) : (
					<Alert severity='success'>Thank you so much for your feedback!</Alert>
				)}
			</Paper>
		</>
	);
};

export default AboutScreen;
