import React, { useEffect, useContext } from 'react';
import {
	Paper,
	makeStyles,
	Box,
	Avatar,
	Typography,
	Button,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { PageHeader, Code, Loader, PaginationButton } from '../layouts';
import { AuthContext, CodeContext } from '../context';
import { Redirect } from 'react-router-dom';
import { constants } from '../utils';

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

const ProfileScreen = ({ history, match }) => {
	const pageNumber = match.params.pageNumber ? match.params.pageNumber : 1;
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const codeContext = useContext(CodeContext);
	const { getMyCode, myCodes, loading, totalCodePages } = codeContext;
	const classes = useStyles();

	useEffect(() => {
		if (user?._id) {
			getMyCode(user.token, pageNumber);
		}
		//eslint-disable-next-line
	}, [pageNumber]);
	return user?._id ? (
		<>
			<Helmet>
				<title>Profile</title>
			</Helmet>
			<Paper className={classes.root}>
				{loading && <Loader />}
				<PageHeader title={'Profile'} push='/' />
				<Box>
					<Avatar className={classes.avatar}>
						{user?.avatar && (
							<img alt='Cant load' className={classes.img} src={user.avatar} />
						)}
					</Avatar>
					<Typography className={classes.name} variant='h5'>
						{user?.name.toUpperCase()}
					</Typography>
				</Box>
				<Box style={{ zIndex: '3' }}>
					{myCodes?.map((code) => (
						<Code key={code._id} code={code} />
					))}
					{!user?._id && <h1 align='center'>{constants.profile.not_logged}</h1>}
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
				{totalCodePages > 1 && (
					<PaginationButton
						page={pageNumber}
						pageCount={totalCodePages}
						profile={true}
					/>
				)}
			</Paper>
		</>
	) : (
		<Redirect to='/' />
	);
};

export default ProfileScreen;
