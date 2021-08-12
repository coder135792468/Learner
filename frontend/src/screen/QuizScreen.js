import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { quiz_data } from '../utils';
import { QuizCard, PageHeader } from '../layouts';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
		overflow: 'auto',
	},
}));
const QuizScreen = () => {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<PageHeader title={'Quiz'} />
			{quiz_data?.map((ele, index) => (
				<QuizCard
					id={index + 1}
					key={index + 1}
					totalQuiz={ele.totalQuiz}
					title={ele.name}
				/>
			))}
		</Paper>
	);
};

export default QuizScreen;
