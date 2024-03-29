import React, { useContext, useEffect, useState } from 'react';
import {
	Paper,
	makeStyles,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
	Avatar,
	Button,
	CircularProgress,
} from '@material-ui/core';
import { PageHeader, Loader, LivePlayUsers, ShowChallenges } from '../layouts';
import { AuthContext, ChallengeContext, SocketContext } from '../context';
import { code_coach } from '../utils';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
		overflow: 'auto',
	},
	item: {
		backgroundColor: theme.palette.type === 'dark' ? '#555' : '#efefef',
		margin: '14px auto',
		maxWidth: '500px',
		padding: '20px',
		borderRadius: '50px',
		display: 'grid',
		gridTemplateColumns: '1fr 2fr',
	},
	avatar: {
		width: '50px',
		height: '50px',
		color: 'white',
	},
	btn: {
		minWidth: '100px',
		margin: '10px 5vw',
		float: 'right',
	},
	pic: {
		width: '100%',
		height: '100%',
	},
}));
const LiveScreen = ({ history }) => {
	const {
		getAllUsers,
		allusers,
		getUserData,
		user,
		loading,
		total_user_pages,
	} = useContext(AuthContext);

	const io = useContext(SocketContext);
	const classes = useStyles();
	const {
		filterChallenge,
		getAllChallenges,
		getChallengeById,
		all_challenges,
	} = useContext(ChallengeContext);

	const [readyPage, setReadyPage] = useState(false);
	const [player, setPlayer] = useState(null);

	const [index, setIndex] = useState(
		Math.floor(Math.random() * code_coach.length)
	);

	const [hasChallenge, setHasChallenge] = useState(false);
	const [btn_disabled, setbtn_disabled] = useState(false);
	const [page, setPage] = useState(2);

	useEffect(() => {
		getUserData();
		//eslint-disable-next-line
	}, []);
	useEffect(() => {
		if (user?.token) {
			getAllUsers(1, true);
			if (!all_challenges?.length) {
				getAllChallenges(user.token);
			}
		}

		//eslint-disable-next-line
	}, [user?.token]);

	useEffect(() => {
		io.on('add', () => {
			if (user?.token) {
				getAllChallenges(user?.token, false);
			}
		});
		io.on('update', async (data) => {
			if (user?.token) {
				await getChallengeById(data, user?.token, false);
			}
		});
		io.on('endgame', async (data) => {
			if (user?.token) {
				await getChallengeById(data, user?.token, true, false);
			}
		});

		io.on('delete', (id) => {
			filterChallenge(id);
		});
		//eslint-disable-next-line
	}, [io]);

	const readyTostart = (data) => {
		setPlayer(data);
		setReadyPage(true);
	};

	const startGame = () => {
		setIndex(Math.floor(Math.random() * code_coach.length));
		const sendIndex = index === 0 ? 1 : index;
		history.push(`/challenges/${sendIndex}?live=true&receiver=${player.id}`);
	};
	const viewallChallenges = async () => {
		//get all challenges

		setHasChallenge(!hasChallenge);
	};

	const loadMoreUsers = async () => {
		if (user?.token) {
			setbtn_disabled(true);
			await getAllUsers(page);
			setPage(page + 1);
			setbtn_disabled(false);
		}
	};
	return user ? (
		<>
			<Helmet>
				<title>Community Challenge</title>
			</Helmet>
			<Paper className={classes.root}>
				{loading && <Loader />}
				<PageHeader
					title={'Community Challenges'}
					list={
						!readyPage && {
							text: !hasChallenge ? 'Challenges' : 'Play',
							onClick: viewallChallenges,
						}
					}
				/>
				{!readyPage && (
					<List>
						{!hasChallenge &&
							allusers?.map(({ name, avatar, _id }) => (
								<LivePlayUsers
									key={_id}
									onClick={readyTostart}
									name={name}
									avatar={avatar}
									id={_id}
								/>
							))}
						{hasChallenge &&
							all_challenges?.map((challenge) => (
								<ShowChallenges io={io} user={user} challenge={challenge} />
							))}
						{!hasChallenge && total_user_pages > 1 && page <= total_user_pages && (
							<Button
								color='success'
								variant='contained'
								disabled={btn_disabled}
								onClick={loadMoreUsers}
								style={{ float: 'right', marginRight: '10vw' }}
							>
								{btn_disabled && (
									<CircularProgress color='secondary' size={20} thickness={4} />
								)}
								<span>Load More</span>
							</Button>
						)}
					</List>
				)}

				{readyPage && (
					<Box ml='auto'>
						<ListItem className={classes.item}>
							<ListItemIcon>
								<Avatar className={classes.avatar}>
									<img
										alt={'couldnt load'}
										className={classes.pic}
										src={user.avatar}
									/>
								</Avatar>
							</ListItemIcon>
							<ListItemText primary={<h4>{player.name}</h4>} />
						</ListItem>
						<p align='center'>V/s</p>
						<ListItem className={classes.item}>
							<ListItemIcon>
								<Avatar className={classes.avatar}>
									<img
										alt={'couldnt load'}
										className={classes.pic}
										src={player.avatar}
									/>
								</Avatar>
							</ListItemIcon>
							<ListItemText primary={<h4> {user.name}</h4>} />
						</ListItem>

						<Button
							onClick={startGame}
							className={classes.btn}
							color='primary'
							variant='contained'
						>
							Start
						</Button>
					</Box>
				)}
			</Paper>
		</>
	) : (
		<Redirect to='/' />
	);
};

export default LiveScreen;
