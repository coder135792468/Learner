import React, { useContext, useEffect, useState } from 'react';
import {
	Paper,
	makeStyles,
	BottomNavigationAction,
	BottomNavigation,
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Button,
	Typography,
} from '@material-ui/core';
import { PageHeader } from '../layouts';
import CodeIcon from '@material-ui/icons/Code';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Helmet } from 'react-helmet';
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
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		'& *': {
			padding: '4px 10px',
			textAlign: 'center',
			margin: '5px 0',
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

const CodePlayGround = ({ match, history }) => {
	const codeContext = useContext(CodeContext);
	const { error, current_code, getCodeByID, updateCode, deleteCode } =
		codeContext;

	const authContxt = useContext(AuthContext);
	const { getUserData, user } = authContxt;

	const [codeOuput, setCodeOuput] = useState(false);

	const [data, setData] = useState({});
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const id = match.params.id;

	const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	useEffect(() => {
		getCodeByID(id);
		if (!user?.name) {
			getUserData();
		}

		//eslint-disable-next-line
	}, []);
	const saveCodeData = async (text, name = current_code.name) => {
		if (text === 'save') {
			const sendData = {
				html: data.html,
				css: data.css,
				js: data.js,
				name,
			};
			updateCode(user.token, sendData, current_code._id);
		} else if (text === 'rename') {
			setOpen(true);
		} else if (text === 'delete') {
			deleteCode(user.token, current_code._id);
			history.push('/');
		}
	};
	const renameCode = () => {
		saveCodeData('save', name);
		setOpen(false);
	};
	return (
		<>
			<Helmet>
				<title>{current_code?.name ? current_code.name : 'Untitled'}</title>
			</Helmet>
			{!error ? (
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
							play: true,
							show: current_code?.user === user?._id ? true : false,
							onClick: saveCodeData,
							id,
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

					<Dialog
						open={open}
						onClose={(e) => setOpen(false)}
						aria-labelledby='form-dialog-title'
					>
						<DialogTitle id='form-dialog-title'>Change Code Name</DialogTitle>

						<DialogContent>
							<TextField
								autoFocus
								value={name}
								onChange={(e) => setName(e.target.value)}
								margin='dense'
								id='name'
								label='Enter Code Name'
								type='email'
								fullWidth
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setOpen(false)} color='primary'>
								Cancel
							</Button>
							<Button onClick={renameCode} color='primary'>
								Rename
							</Button>
						</DialogActions>
					</Dialog>
				</Paper>
			) : (
				<Paper className={`${classes.root} ${classes.center}`}>
					<Typography variant='h6'>
						Looks Like Some Error Come,Try Again
					</Typography>
					<Button
						onClick={() => history.push('/')}
						color='primary'
						variant='contained'
					>
						Back to Home
					</Button>
				</Paper>
			)}
		</>
	);
};

export default CodePlayGround;
