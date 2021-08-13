import React, { useContext, useState, useEffect } from 'react';
import {
	Box,
	Paper,
	FormControl,
	FormHelperText,
	makeStyles,
	TextField,
	Button,
	Typography,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
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
	},
	heading: {
		letterSpacing: '5px',
	},
}));
const Login = ({ history }) => {
	const authContext = useContext(AuthContext);
	const { loginUser, error, clearError, login } = authContext;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [warning, setWarning] = useState('');

	const classes = useStyles();

	useEffect(() => {
		clearError();

		//eslint-disable-next-line
	}, []);
	const submitHandler = (e) => {
		e.preventDefault();
		setWarning('');
		if (email.trim().length === 0) return setWarning('Email is Required');
		if (password.trim().length === 0) return setWarning('Password is Required');

		loginUser(email, password);
	};
	return !login ? (
		<Paper className={classes.paper}>
			{error !== null && <ToastMsg msg={error} />}
			<Typography className={classes.heading} variant='h4'>
				Login
			</Typography>
			<img className={classes.avatar} alt='Login' src={loginPic} />
			<FormControl>
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
						Login
					</Button>
				</Box>
			</FormControl>
			<Typography vairant='p'>
				Not have an Account ?{' '}
				<Link to='/register' style={{ color: '#4488ff', fontWeight: 'bold' }}>
					Register
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

export default Login;
