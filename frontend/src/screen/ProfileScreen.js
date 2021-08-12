import React, { useEffect, useContext, useState } from 'react';
import {
	Paper,
	makeStyles,
	Box,
	Avatar,
	Typography,
	Button,
} from '@material-ui/core';

import { PageHeader, Code } from '../layouts';
import { AuthContext, CodeContext } from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	avatar: {
		width: '100px',
		height: '100px',
		backgroundColor: '#fff',
		margin: '20px auto',
		border: '4px solid #4488ff',
	},
	name: {
		textAlign: 'center',
	},
	img: {
		width: '100%',
		height: '100%',
	},
}));

const ProfileScreen = ({ history }) => {
	const authContext = useContext(AuthContext);
	const { getUserData, user } = authContext;

	const codeContext = useContext(CodeContext);
	const { getAllCodes, codes } = codeContext;
	const [myCodes, setMyCodes] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		if (!user?.name) {
			getUserData();
		}
		if (codes?.length == 0 || codes === null || !codes.length) {
			getAllCodes();
		}
		setMyCodes(codes?.filter((code) => code.user === user?._id));
	}, [codes]);
	return (
		<Paper className={classes.root}>
			<PageHeader title={'Profile'} />
			<Box>
				<Avatar className={classes.avatar}>
					{user?.avatar && <img className={classes.img} src={user.avatar} />}
				</Avatar>
				<Typography className={classes.name} variant='h5'>
					{user?.name.toUpperCase()}
				</Typography>
			</Box>
			<Box style={{ zIndex: '3' }}>
				{myCodes?.map((code) => (
					<Code key={code._id} code={code} />
				))}
				{!user?._id && <h1 align='center'>You are not logged In</h1>}
				{!user?._id && (
					<Button
						onClick={() => history.push('login')}
						style={{ margin: '20%', width: '60%' }}
						variant='contained'
						color='secondary'
					>
						Login
					</Button>
				)}
			</Box>
		</Paper>
	);
};

export default ProfileScreen;
