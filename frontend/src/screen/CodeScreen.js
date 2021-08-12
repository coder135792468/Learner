import React, { useContext, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { Code } from '../layouts';
import { CodeContext } from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		maxHeight: '100%',
	},
}));
const CodeScreen = () => {
	const codeContext = useContext(CodeContext);
	const { getAllCodes, codes, filter } = codeContext;
	useEffect(() => {
		if (!codes?.length) {
			getAllCodes();
		}

		//eslint-disable-next-line
	}, []);
	const classes = useStyles();

	const getData = () =>
		filter?.length !== 0 && filter !== null ? filter : codes;
	return (
		<Paper className={classes.root}>
			{getData()?.map((code) => (
				<Code code={code} key={code._id} />
			))}
		</Paper>
	);
};

export default CodeScreen;
