import React, { useContext, useEffect, useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { Code, PaginationButton, ToastMsg } from '../layouts';
import { CodeContext, SocketContext } from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		boxShadow: 'none',

		maxHeight: '100%',
		'& ::webkit-scrollbar': {
			display: 'none',
		},
	},
}));

const CodeScreen = ({ pageNumber }) => {
	const codeContext = useContext(CodeContext);
	const io = useContext(SocketContext);

	const { getAllCodes, codes, filter, totalPages } = codeContext;
	const [msg, setMsg] = useState('');
	useEffect(() => {
		getAllCodes(pageNumber);

		//eslint-disable-next-line
	}, [pageNumber]);

	useEffect(() => {
		io.on('add', (name) => {
			setMsg(`${name} challenged you`);

			setTimeout(() => {
				setMsg('');
			}, 2000);
		});
	}, [io]);
	const classes = useStyles();

	const getData = () =>
		filter?.length !== 0 && filter !== null ? filter : codes;
	return (
		<Paper className={classes.root}>
			{msg.length > 4 && <ToastMsg msg={msg} />}
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
