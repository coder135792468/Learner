import React, { useContext, useEffect, useState } from 'react';
import {
	Paper,
	makeStyles,
	BottomNavigationAction,
	BottomNavigation,
	IconButton,
} from '@material-ui/core';
import { PageHeader } from '../layouts';
import CodeIcon from '@material-ui/icons/Code';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { Editor } from '../components';
import { CodeContext, AuthContext } from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
		position: 'relative',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	run: {
		position: 'fixed',
		right: '20px',
		bottom: '80px',
		zIndex: 100,
		backgroundColor: 'rgba(255,0,2550,0.5)',
	},
}));

const CodePlayGround = ({ match }) => {
	const codeContext = useContext(CodeContext);
	const { current_code, getCodeByID, updateCode } = codeContext;

	const authContxt = useContext(AuthContext);
	const { getUserData, user } = authContxt;

	const [codeOuput, setCodeOuput] = useState(false);

	const [data, setData] = useState({});
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const id = match.params.id;

	useEffect(() => {
		getCodeByID(id);
		if (!user?.name) {
			getUserData();
		}

		//eslint-disable-next-line
	}, []);
	const saveCode = async () => {
		// if (current_code !== null) {
		const sendData = {
			html: data.html,
			css: data.css,
			js: data.js,
			name: current_code.name,
		};
		updateCode(user.token, sendData, current_code._id);
		// }
	};
	return (
		<Paper className={classes.root}>
			<PageHeader
				title={
					current_code?.name
						? current_code.name.length > 10
							? current_code.name.substring(0, 10) + '...'
							: current_code.name
						: 'Loading...'
				}
				btn_data={{
					show: current_code?.user === user?._id ? true : false,
					onClick: saveCode,
				}}
				push='/'
			/>
			<Editor
				data={data}
				setData={setData}
				codeOuput={codeOuput}
				value={value}
				code={current_code}
			/>
			<IconButton
				color='primary'
				onClick={() => setCodeOuput(true)}
				className={classes.run}
			>
				<PlayArrowIcon />
			</IconButton>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
					setCodeOuput(false);
				}}
				showLabels
			>
				<BottomNavigationAction label='HTML' icon={<CodeIcon />} />
				<BottomNavigationAction label='Css' icon={<CodeIcon />} />
				<BottomNavigationAction label='Js' icon={<CodeIcon />} />
			</BottomNavigation>
		</Paper>
	);
};

export default CodePlayGround;
