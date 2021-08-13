import React from 'react';
import {
	Paper,
	makeStyles,
	Grid,
	Card,
	Button,
	CardContent,
	Typography,
	CardActions,
	Chip,
} from '@material-ui/core';
import { PageHeader } from '../layouts';
import { code_coach } from '../utils';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	card: {
		width: '100%',
		height: '250px',
		margin: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: theme.palette.type === 'dark' ? '#444' : '#efefef',
	},
}));

const CodeCoachScreen = ({ history }) => {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<PageHeader title={'Code Coach Challenges'} />
			<Grid container>
				{code_coach.map((ele, index) => (
					<Grid container item xs={12} sm={6} md={3} spacing={3}>
						<Card button className={classes.card}>
							<CardContent>
								<Typography variant='h5'>{ele.title}</Typography>
							</CardContent>
							<Chip
								variant='contained'
								label={`Total testcases: ${ele.testCases.length}`}
							/>
							<CardActions>
								<Button
									onClick={() => history.push(`/challenges/${index + 1}`)}
									fullWidth
									color='secondary'
									variant='contained'
								>
									Solve problem
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Paper>
	);
};

export default CodeCoachScreen;
