import React, { useEffect, useContext, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { CodeContext } from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		height: 'calc(100vh - 5px)',
		width: '100%',
		outline: 'none',
		border: 'none',
		margin: 0,
		padding: 0,
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
}));
const DeployScreen = ({
	match: {
		params: { id },
	},
}) => {
	const { getCodeByID, current_code, clearError } = useContext(CodeContext);

	const { root } = useStyles();

	const frame = useRef(null);
	useEffect(() => {
		clearError();
		//eslint-disable-next-line
	}, []);
	useEffect(() => {
		if (!current_code) {
			getCodeByID(id);
		}
		console.log(current_code);
		if (current_code) {
			const opt = frame.current.contentWindow.document;
			opt.open();
			opt.writeln(
				current_code.html +
					'<style>' +
					current_code.css +
					'</style>' +
					'<script>' +
					current_code.js +
					'</script>'
			);
			opt.close();
		}

		//eslint-disable-next-line
	}, [current_code]);
	return <iframe ref={frame} title='Deploy Screen' className={root}></iframe>;
};

export default DeployScreen;
