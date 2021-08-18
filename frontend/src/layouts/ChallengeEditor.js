import React, { useRef } from 'react';
import { makeStyles, Paper, IconButton } from '@material-ui/core';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-javascript';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
	run: {
		position: 'absolute',
		right: '20px',
		bottom: '40px',
		zIndex: 100,
		backgroundColor: 'rgba(255,0,2550,0.5)',
	},
}));

const ChallengeEditor = ({ code, setValue, setCode, live }) => {
	const classes = useStyles();
	const jsref = useRef(null);
	const onChange = () => {
		setCode(jsref.current.editor.getValue());
	};

	return (
		<Paper>
			<AceEditor
				placeholder='js goes here'
				mode='javascript'
				theme='nord_dark'
				style={{ width: '100vw', height: 'calc(90vh - 50px)' }}
				fontSize={15}
				wrapEnabled={false}
				value={code}
				ref={jsref}
				highlightActiveLine={true}
				onChange={onChange}
				setOptions={{ showLineNumbers: true }}
			/>
			<IconButton
				color='primary'
				onClick={() => setValue(2)}
				className={classes.run}
			>
				<PlayArrowIcon />
			</IconButton>
		</Paper>
	);
};

export default ChallengeEditor;
