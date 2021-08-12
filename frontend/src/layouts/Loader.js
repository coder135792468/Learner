import React from 'react';
import { Backdrop, makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const Loader = () => {
	const { backdrop } = useStyles();
	return (
		<Backdrop className={backdrop} open={true}>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
};

export default Loader;
