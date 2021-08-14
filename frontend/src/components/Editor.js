import React, { useRef, useEffect } from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-nord_dark';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
const useStyles = makeStyles((theme) => ({
	editor: {
		width: '100%',
		backgroundColor: '#fff',
		height: 'calc(90vh - 50px)',
	},
	frame: {
		width: '100%',
		height: '100%',
		border: 'none',
		outline: 'none',
		zIndex: '20',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
}));

const editor = {
	0: 'html',
	1: 'css',
	2: 'js',
};
const Editor = ({ data, setData, value, code, codeOuput }) => {
	const htmlref = useRef(null);
	const cssref = useRef(null);
	const jsref = useRef(null);
	const output = useRef(null);
	const classes = useStyles();

	const onChange = () => {
		let code;
		if (value === 0) {
			code = htmlref.current.editor.getValue();
		} else if (value === 1) {
			code = cssref.current.editor.getValue();
		} else if (value === 2) {
			code = jsref.current.editor.getValue();
		}
		setData({ ...data, [editor[value]]: code });
	};
	useEffect(() => {
		setData({
			html: code?.html && code.html,
			css: code?.css && code.css,
			js: code?.js && code.js,
		});
		//eslint-disable-next-line
	}, [code]);

	const showOuput = (code) => {
		const opt = output.current.contentWindow.document;
		opt.open();
		opt.writeln(
			data.html +
				'<style>' +
				data.css +
				'</style>' +
				'<script>' +
				data.js +
				'</script>'
		);
		opt.close();
	};
	useEffect(() => {
		if (codeOuput) {
			setTimeout(() => showOuput(), 100);
		}
		//eslint-disable-next-line
	}, [codeOuput]);
	return (
		<Paper className={classes.editor}>
			{!codeOuput && (
				<>
					{value === 0 && (
						<AceEditor
							placeholder='HTML goes here'
							mode='html'
							theme='nord_dark'
							style={{ width: '100vw', height: 'calc(90vh - 50px)' }}
							className={classes.frame}
							fontSize={17}
							wrapEnabled={false}
							value={data.html}
							ref={htmlref}
							chowPrintMargin={false}
							showGutter={true}
							highlightActiveLine={true}
							onChange={onChange}
							setOptions={{
								enableBasicAutocompletion: true,
								enableLiveAutocompletion: true,
								enableSnippets: true,
								showLineNumbers: true,
							}}
						/>
					)}
					{value === 1 && (
						<AceEditor
							placeholder='CSS goes here'
							mode='css'
							theme='nord_dark'
							style={{ width: '100vw', height: 'calc(90vh - 50px)' }}
							className={classes.frame}
							fontSize={17}
							wrapEnabled={false}
							ref={cssref}
							value={data.css}
							chowPrintMargin={false}
							showGutter={true}
							highlightActiveLine={true}
							onChange={onChange}
							setOptions={{
								enableBasicAutocompletion: true,
								enableLiveAutocompletion: true,
								enableSnippets: true,
								showLineNumbers: true,
							}}
						/>
					)}
					{value === 2 && (
						<AceEditor
							placeholder='JavaScript goes here'
							mode='javascript'
							theme='nord_dark'
							style={{ width: '100vw', height: 'calc(90vh - 50px)' }}
							className={classes.frame}
							fontSize={17}
							wrapEnabled={false}
							ref={jsref}
							value={data.js}
							chowPrintMargin={false}
							showGutter={true}
							highlightActiveLine={true}
							onChange={onChange}
							setOptions={{
								enableBasicAutocompletion: true,
								enableLiveAutocompletion: true,
								enableSnippets: true,
								showLineNumbers: true,
							}}
						/>
					)}
				</>
			)}
			{codeOuput && (
				<iframe
					title='CodePlayGroundOutput'
					ref={output}
					className={classes.frame}
				></iframe>
			)}
		</Paper>
	);
};

export default Editor;
