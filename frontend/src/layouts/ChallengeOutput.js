import React, { useEffect } from 'react';
import { Paper, makeStyles, Box, Chip } from '@material-ui/core';
import { useToasts } from 'react-toast-notifications';
import { randomCompliment } from '../utils';

const useStyles = makeStyles((theme) => ({
	root: {
		height: 'calc(100vh - 120px)',
		width: '100vw',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	item: {
		backgroundColor: '#444',
		margin: '10px 0',
		flexDirection: 'column',
		color: 'white',
	},
	output: {
		backgroundColor: 'whitesmoke',
		color: '#000',
		padding: '10px 5px',
		borderRadius: '20px',
	},
}));
const ChallengeOutput = ({ code, test_cases, setSolved }) => {
	const { addToast } = useToasts();

	const classes = useStyles();
	const results = test_cases.map((ele) => {
		try {
			return {
				//eslint-disable-next-line
				your_output: eval(code + `;${ele.run}`),
				//eslint-disable-next-line
				solved: ele.expected == eval(code + `;${ele.run}`) ? true : false,
			};
		} catch (error) {
			console.error(error);

			return {
				your_output: `${error}`,
				solved: false,
			};
		}
	});
	useEffect(() => {
		setSolved(results.filter((ele) => ele.solved === true).length);
		setTimeout(() => {
			if (results.every((ele) => ele.solved === true)) {
				addToast(randomCompliment(), { appearance: 'success' });
			}
		}, 500);

		//eslint-disable-next-line
	}, [code]);
	return (
		<Paper className={classes.root}>
			{test_cases.map((ele, i) => (
				<Box p={3} className={classes.item} key={i + 1}>
					<h3 style={{ color: 'white' }}>Test Case : {i + 1}</h3>
					<p className={classes.output}>
						<strong>Exprected Output : </strong> {ele.expected}
					</p>
					<p className={classes.output}>
						<strong>Your Output : </strong>
						{results[i].your_output}
					</p>
					<Chip
						color='primary'
						label={results[i].solved ? 'Solved' : 'Not Solved'}
					/>
				</Box>
			))}
		</Paper>
	);
};

export default ChallengeOutput;
