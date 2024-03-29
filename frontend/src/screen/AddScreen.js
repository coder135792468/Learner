import React, { useState, useContext, useEffect } from 'react';
import {
	Paper,
	makeStyles,
	TextField,
	Button,
	FormControl,
	MenuItem,
	Select,
	InputLabel,
} from '@material-ui/core';
import { PageHeader, Loader } from '../layouts';
import { useToasts } from 'react-toast-notifications';
import { CodeContext, AuthContext } from '../context';
import { Redirect } from 'react-router-dom';
import addPic from './images/addPic.gif';
import { Helmet } from 'react-helmet';
import { constants } from '../utils';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		position: 'absolute',
		top: 0,
	},
	text: {
		width: '80%',
		maxWidth: '500px',
		margin: '20px auto',
	},
	avatar: {
		width: '100px',
		backgroundColor: 'grey',
		borderRadius: '20px',
		[theme.breakpoints.up('sm')]: {
			width: '200px',
		},
		[theme.breakpoints.up('vs')]: {
			width: '80px',
		},
	},
}));

const AddScreen = () => {
	const codeContext = useContext(CodeContext);
	const { addCode, current_code, loading } = codeContext;

	const authContext = useContext(AuthContext);
	const { getUserData, user } = authContext;

	const { addToast } = useToasts();

	const [name, setName] = useState('');
	const [lang, setLang] = useState('');
	const [created, setCreated] = useState(false);
	const classes = useStyles();

	const [id, setID] = useState(null);

	useEffect(() => {
		if (created) {
			setID(current_code?._id.toString());
		}

		//eslint-disable-next-line
	}, [addCode, created]);

	const createCode = async () => {
		if (name.trim().length === 0) {
			return addToast(constants.add.empty_name, { appearance: 'info' });
		}
		if (lang.trim().length === 0) {
			return addToast(constants.add.lang_empty, { appearance: 'info' });
		}
		//create a cod
		const data = {
			html: `<html>
            <head>
               <title>Document Title</title>
            </head>
             <body>
       
            </body>
       </html>`,
			css: `*{
                margin:0;
                padding:0;
             }`,
			js: `//your js code start here`,
			lang,
			name,
		};
		if (user?.token) {
			await addCode(user.token, data);
			setCreated(true);
			setName('');
			setLang('');
		}
	};

	useEffect(() => {
		if (!user?.name) {
			getUserData();
		}

		//eslint-disable-next-line
	}, []);
	return id === null && !created ? (
		<>
			<Helmet>
				<title>Add Code</title>
			</Helmet>
			<PageHeader title={constants.add.title} />
			<Paper className={classes.root}>
				<img
					alt='Add Code'
					draggable={false}
					className={classes.avatar}
					src={addPic}
				/>
				<TextField
					value={name}
					onChange={(e) => setName(e.target.value)}
					label='Enter Code Name'
					className={classes.text}
				/>
				{loading && <Loader />}
				<FormControl className={classes.text}>
					<InputLabel id='language'>{constants.add.lang_select}</InputLabel>
					<Select
						labelId='language'
						id='demo-simple-select'
						value={lang}
						onChange={(e) => setLang(e.target.value)}
					>
						{' '}
						<MenuItem value={'web'}>HTML,CSS & JavaScript</MenuItem>
					</Select>
				</FormControl>

				<Button
					style={{ maxWidth: '200px' }}
					fullWidth
					color='primary'
					variant='contained'
					onClick={createCode}
				>
					{constants.add.create_btn}
				</Button>
			</Paper>
		</>
	) : (
		created && id !== null && <Redirect to={`/code/${id}`} />
	);
};

export default AddScreen;
