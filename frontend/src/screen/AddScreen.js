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
import { PageHeader } from '../layouts';
import { useToasts } from 'react-toast-notifications';
import { CodeContext, AuthContext } from '../context';
import { Redirect } from 'react-router-dom';
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
}));

const AddScreen = ({ history }) => {
	const codeContext = useContext(CodeContext);
	const { addCode, current_code } = codeContext;

	const authContext = useContext(AuthContext);
	const { getUserData, user } = authContext;

	const { addToast } = useToasts();

	const [name, setName] = useState('');
	const [lang, setLang] = useState('');
	const classes = useStyles();

	const createCode = async () => {
		if (name.trim().length === 0) {
			return addToast('Name Cant Be Empty', { appearance: 'info' });
		}
		if (lang.trim().length === 0) {
			return addToast('Please Select Language', { appearance: 'info' });
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
			const id = current_code?.code._id.toString();
			history.push(`/code/${id}`);
			setName('');
			setLang('');
		}
	};

	useEffect(() => {
		if (!user?.name) {
			getUserData();
		}
	}, []);
	return (
		<>
			<PageHeader title={'Create Code'} />
			<Paper className={classes.root}>
				<TextField
					value={name}
					onChange={(e) => setName(e.target.value)}
					label='Enter Code Name'
					className={classes.text}
				/>

				<FormControl className={classes.text}>
					<InputLabel id='language'>Select Language</InputLabel>
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
					Create
				</Button>
			</Paper>
		</>
	);
};

export default AddScreen;
