import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { PageHeader } from '../layouts';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
	},
}));
const LiveScreen = () => {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<PageHeader title={'Live Challenges'} />
		</Paper>
	);
};

export default LiveScreen;
