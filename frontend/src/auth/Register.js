import React, { useState, useContext, useEffect } from 'react';
import {
	Box,
	Paper,
	FormControl,
	Input,
	InputLabel,
	FormHelperText,
	makeStyles,
	TextField,
	Button,
	Typography,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { ValidateEmail } from '../utils/helper';
import AuthContext from '../context/authContext/AuthContext';
import { ToastMsg } from '../layouts';
import loginPic from './images/loginPic.gif';

const useStyles = makeStyles((theme) => ({
	paper: {
		widht: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	avatar: {
		width: '100px',
		margin: '20px',
		borderRadius: '50%',
		backgroundColor: 'grey',
	},
	heading: {
		letterSpacing: '5px',
	},
}));
const Register = ({ history }) => {
	const authContext = useContext(AuthContext);
	const { registerUser, error, clearError, login } = authContext;

	const [warning, setWarning] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const classes = useStyles();

	useEffect(() => {
		clearError();

		//eslint-disable-next-line
	}, []);
	const submitHandler = (e) => {
		e.preventDefault();
		setWarning('');
		if (!ValidateEmail(email)) return setWarning('Email is not valid');
		if (password.trim().length < 6)
			return setWarning('Password must be at least 6 characters');
		if (name.trim().length === 0) return setWarning('Name is Required');
		registerUser(name, email, password);
	};
	return !login ? (
		<Paper className={classes.paper}>
			{error !== null && <ToastMsg msg={error} />}
			<Typography className={classes.heading} variant='h4'>
				Register
			</Typography>
			<img className={classes.avatar} alt='Login' src={loginPic} />

			<FormControl>
				<InputLabel htmlFor='my-input'>Enter Name</InputLabel>
				<Input
					value={name}
					onChange={({ target: { value } }) => setName(value)}
					id='my-input'
					aria-describedby='my-helper-text'
					required
				/>
				<TextField
					label='Enter Email'
					value={email}
					type='email'
					onChange={({ target: { value } }) => setEmail(value)}
					required
				/>
				<TextField
					label='Enter Password'
					value={password}
					type='password'
					onChange={({ target: { value } }) => setPassword(value)}
					required
				/>

				<FormHelperText style={{ color: 'tomato' }} id='my-helper-text'>
					{warning}
				</FormHelperText>
				<Box my={2} ml={'auto'}>
					<Button onClick={submitHandler} color='primary' variant='contained'>
						Register
					</Button>
				</Box>
			</FormControl>
			<Typography vairant='p'>
				Already have an Account ?{' '}
				<Link to='/login' style={{ color: '#4488ff', fontWeight: 'bold' }}>
					Login
				</Link>
			</Typography>
			<Button
				color='secondary'
				variant='contained'
				onClick={() => history.push('/')}
				style={{ marginTop: '10px' }}
			>
				Back to Home
			</Button>
		</Paper>
	) : (
		<Redirect to='/' />
	);
};

export default Register;
