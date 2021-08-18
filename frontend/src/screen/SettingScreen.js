import React, { useContext, useEffect, useState } from 'react';
import {
	Paper,
	makeStyles,
	Typography,
	List,
	ListItem,
	Box,
	Button,
	Avatar,
	TextField,
	Divider,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { useToasts } from 'react-toast-notifications';
import FaceIcon from '@material-ui/icons/Face';
import { AuthContext } from '../context';
import axios from 'axios';
import { ToastMsg, PageHeader, Loader } from '../layouts';
import { constants } from '../utils';

const useStyles = makeStyles((theme) => ({
	main: {
		width: '100vw',
		height: '100vh',
		overflow: 'auto',
	},
	image: {
		margin: '10px auto',
		width: '100px',
		height: '100px',
	},
	file: {
		margin: '10px auto',
		outline: 'none',
		border: 'none',
	},
	item: {
		marginBottom: '10px',
		padding: '5px 10px',
		flexDirection: 'column',
	},
	avatar: {
		width: '100%',
		height: '100%',
		backgroundSize: 'cover',
	},
	text: {
		margin: '10px',
	},
}));

const endpoints = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_CLIENT_ID}`;

const SettingScreen = () => {
	const { addToast } = useToasts();

	const authContext = useContext(AuthContext);
	const { getUserData, user, updateUser } = authContext;

	const [error, setError] = useState(null);

	const classes = useStyles();
	const [uploading, setUploading] = useState(false);
	const [file, setFile] = useState();

	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('');
	const [bio, setBio] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	useEffect(() => {
		if (!user?.name || user === null) {
			getUserData();
		}
		if (user?.avatar) {
			setAvatar(user.avatar);
		}

		//eslint-disable-next-line
	}, []);
	const updateProfile = () => {
		//update profile here
		const data = {};
		if (name.trim().length !== 0) {
			data.name = name;
		}
		if (email.trim().length !== 0) {
			data.email = email;
		}
		if (avatar.trim().length !== 0) {
			data.avatar = avatar;
		}
		if (bio.trim().length !== 0) {
			data.bio = bio;
		}
		if (password.trim().length !== 0) {
			if (password.trim() === confirmPassword.trim()) {
				data.password = password;
			} else {
				setError(constants.setting.password_notMatch);
			}
		}
		updateUser(data);
	};

	const fileHandler = async () => {
		const formData = new FormData();
		formData.append('image', file);

		setUploading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const { data } = await axios.post(endpoints, formData, config);

			setAvatar(data.data.display_url);
			setUploading(false);
			setFile('');
			updateProfile();
			addToast(constants.setting.pic_change, {
				appearance: 'info',
			});
		} catch (error) {
			console.log(error);
			setUploading(false);
			addToast(constants.setting.error, {
				appearance: 'error',
			});
		}
	};

	return (
		<>
			<Helmet>
				<title>Settings</title>
			</Helmet>
			<Paper className={classes.main}>
				{uploading && <Loader />}
				{error?.length && <ToastMsg msg={error} />}

				<PageHeader title={'Setting'} />
				<List>
					<Typography className={classes.text} variant='h6'>
						{constants.setting.avatar_change_title}
					</Typography>
					<ListItem className={classes.item}>
						<Avatar className={classes.image}>
							{user?.avatar || avatar ? (
								<img
									alt='Cant Load'
									className={classes.avatar}
									src={user.avatar ? user.avatar : avatar}
								/>
							) : (
								<FaceIcon />
							)}
						</Avatar>
						<input
							className={classes.file}
							type='file'
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<Box mx='auto'>
							<Button
								onClick={fileHandler}
								variant='contained'
								component='label'
								color='primary'
							>
								Upload File
							</Button>
						</Box>

						<Button
							color='secondary'
							variant='contained'
							onClick={updateProfile}
							style={{ margin: '10px 10px 10px auto' }}
						>
							Change
						</Button>
					</ListItem>
					<Divider />
					<Typography className={classes.text} variant='h6'>
						{constants.setting.info_change_title}
					</Typography>

					<ListItem className={classes.item}>
						<TextField
							value={name}
							onChange={(e) => setName(e.target.value)}
							label='Change Name'
							style={{ margin: '10px auto' }}
						/>
						<Box ml='auto' mr='20px'>
							<Button
								onClick={updateProfile}
								variant='contained'
								color='primary'
							>
								Change
							</Button>
						</Box>
						<TextField
							value={bio}
							onChange={(e) => setBio(e.target.value)}
							label='Change Bio'
							style={{ margin: '10px auto' }}
						/>
						<Box ml='auto' mr='20px'>
							<Button
								onClick={updateProfile}
								variant='contained'
								color='primary'
							>
								Change
							</Button>
						</Box>
						<TextField
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							label='Change Email'
							style={{ margin: '10px auto' }}
						/>
						<Box ml='auto' mr='20px'>
							<Button
								onClick={updateProfile}
								variant='contained'
								color='primary'
							>
								Change
							</Button>
						</Box>
					</ListItem>
					<Divider />
					<Typography className={classes.text} variant='p'>
						{constants.setting.password_change_title}
					</Typography>
					<ListItem className={classes.item}>
						<TextField
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							label='New Password'
							style={{ margin: '10px auto' }}
						/>
						<TextField
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							label='Confirm Password'
							style={{ margin: '10px auto' }}
						/>
						<Box ml='auto' mr='20px'>
							<Button
								onClick={updateProfile}
								variant='contained'
								color='primary'
							>
								Change
							</Button>
						</Box>
					</ListItem>
				</List>
			</Paper>
		</>
	);
};

export default SettingScreen;
