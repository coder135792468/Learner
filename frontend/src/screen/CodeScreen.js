import React, { useContext, useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { Code, PaginationButton } from '../layouts';
import { CodeContext } from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		maxHeight: '100%',
		'& ::webkit-scrollbar': {
			display: 'none',
		},
	},
}));
const CodeScreen = ({ pageNumber }) => {
	const codeContext = useContext(CodeContext);
	const { getAllCodes, codes, filter, totalPages } = codeContext;

	useEffect(() => {
		getAllCodes(pageNumber);

		//eslint-disable-next-line
	}, [pageNumber]);
	const classes = useStyles();

	const getData = () =>
		filter?.length !== 0 && filter !== null ? filter : codes;
	return (
		<Paper className={classes.root}>
			{getData()?.map((code) => (
				<Code code={code} key={code._id} />
			))}
			{totalPages > 1 && (
				<PaginationButton page={pageNumber} pageCount={totalPages} />
			)}
		</Paper>
	);
};

export default CodeScreen;
