import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import {
	Paper,
	makeStyles,
	Typography,
	Box,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	Button,
} from '@material-ui/core';
import { quiz_data, randomCompliment } from '../utils';
import { PageHeader } from '../layouts';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
	},
	main: {
		width: '100%',
		height: 'calc(100% - 100px)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	title: {
		margin: '10px',
		fontWeight: 'bold',
	},
	options: {
		margin: '5px',
		padding: '5px 10px',
		borderRadius: '40px',
		minWidth: '200px',
		backgroundColor: '#444',
		color: 'white',
	},
	btn: {
		maxWidth: '300px',
		borderRadius: '40px',
	},
}));
const QuizPlayScreen = ({ match, history }) => {
	const { addToast } = useToasts();

	const id = match.params.id;
	const { quizzes, name, totalQuiz } = quiz_data[id - 1];
	const [index, setIndex] = useState(0);
	const classes = useStyles();
	const [value, setValue] = useState('');

	const submitAnswer = () => {
		const corrIndex = quizzes[index].question_data.answer;
		const correctAnswer = quizzes[index].question_data.options[corrIndex].data;
		if (correctAnswer === value) {
			addToast(randomCompliment(), { appearance: 'success' });

			setTimeout(() => {
				if (index < totalQuiz - 1) {
					setIndex(index + 1);
				} else {
					history.goBack();
				}
			}, 200);
		} else {
			addToast('Try Again', { appearance: 'error' });
		}
	};
	return (
		<Paper className={classes.root}>
			<PageHeader
				title={name}
				optional={{ index: index + 1, total: totalQuiz }}
			/>
			<Paper className={classes.main}>
				<Typography className={classes.title} variant='h6'>
					{index + 1}. {quizzes[index].question_data.question}
				</Typography>
				<Box px={4} py={4} mx={'auto'}>
					<FormControl component='fieldset'>
						<RadioGroup
							aria-label='gender'
							name='gender1'
							value={value}
							onChange={({ target: { value } }) => setValue(value)}
						>
							{quizzes[index].question_data.options.map((ele) => (
								<FormControlLabel
									value={ele.data}
									control={<Radio />}
									label={ele.data}
									className={classes.options}
								/>
							))}
						</RadioGroup>
					</FormControl>
				</Box>
				<Button
					className={classes.btn}
					fullWidth
					color='secondary'
					variant='contained'
					onClick={submitAnswer}
				>
					Submit
				</Button>
			</Paper>
		</Paper>
	);
};

export default QuizPlayScreen;
