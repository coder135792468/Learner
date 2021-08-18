import React, { useContext, useEffect, useState } from 'react';
import {
	ListItem,
	Avatar,
	ListItemText,
	ListItemIcon,
	makeStyles,
	Button,
	Divider,
} from '@material-ui/core';
import { userByID, constants } from '../utils';
import { useHistory } from 'react-router-dom';
import { ChallengeContext } from '../context';
import { Loader } from '.';

const useStyles = makeStyles((theme) => ({
	item: {
		flexDirection: 'column',
		maxWidth: '500px',
		borderRadius: '40px',
		margin: '10px auto',
		overflowX: 'hidden',
		backgroundColor: theme.palette.type === 'dark' ? '#555' : '#efefef',
	},
	button: {
		margin: '10px auto',
	},
	result: {
		display: 'flex',
		alignItems: 'center',
		'& *': {
			margin: '0 5px',
		},
	},
	avatar: {
		width: '100%',
		height: '100%',
	},
}));

const ShowChallenges = ({ io, challenge, user }) => {
	const classes = useStyles();
	const history = useHistory();

	const {
		index,
		_id,
		end,
		accepted,
		sender,
		receiver,
		senderTime,
		receiverTime,
	} = challenge;

	const [senderData, setSenderData] = useState();
	const [receiverData, setReceiverData] = useState();

	const { updateChallenge, deleteChallenge, loading } =
		useContext(ChallengeContext);

	const getData = async () => {
		setSenderData(await userByID(sender));
		setReceiverData(await userByID(receiver));
	};
	useEffect(() => {
		getData();
		//eslint-disable-next-line
	}, [challenge]);

	const acceptChallenge = async () => {
		//accept challenge
		const value = {
			accepted: true,
		};
		if (user.token) {
			await updateChallenge(value, _id, user.token);
			io.emit('update', _id);
		} else {
			history.push('/');
		}
		history.push(`/challenges/${index}?live=false&receiver=${_id}`);
	};

	const deleteCompletedChallenges = async () => {
		//delete challenge
		io.emit('delete', _id);
		await deleteChallenge(_id, user.token);
	};
	return (
		<ListItem className={classes.item}>
			{loading && <Loader />}
			<ListItem>
				<ListItemIcon>
					<Avatar>
						{senderData?.avatar && (
							<img
								className={classes.avatar}
								alt={senderData.name}
								src={senderData?.avatar}
							/>
						)}
					</Avatar>
				</ListItemIcon>
				<ListItemText primary={senderData?.name} />
			</ListItem>
			<p align='center'>V/s</p>
			<ListItem>
				<ListItemIcon>
					<Avatar>
						{receiverData?.avatar && (
							<img
								className={classes.avatar}
								alt={receiverData.name}
								src={receiverData?.avatar}
							/>
						)}
					</Avatar>
				</ListItemIcon>
				<ListItemText primary={receiverData?.name} />
			</ListItem>
			{user._id === receiver && !end && (
				<Button
					className={classes.button}
					fullWidth
					color='primary'
					variant='contained'
					onClick={acceptChallenge}
				>
					{constants.show_challenge.accept_btn}
				</Button>
			)}
			{user._id === sender && end && (
				<Button
					className={classes.button}
					fullWidth
					color='secondary'
					variant='contained'
					onClick={deleteCompletedChallenges}
				>
					{constants.show_challenge.delete_btn}
				</Button>
			)}
			{end && senderTime === receiverTime ? (
				<h4>{constants.show_challenge.draw}</h4>
			) : (
				accepted &&
				end && (
					<>
						<Divider style={{ height: '4px', width: '100vw' }} />
						<h5 className={classes.result}>
							<Avatar>
								{senderTime < receiverTime
									? senderData?.avatar && (
											<img
												alt={senderData?.name}
												className={classes.avatar}
												src={senderData.avatar}
											/>
									  )
									: receiverData?.avatar && (
											<img
												alt={receiverData?.name}
												className={classes.avatar}
												src={receiverData.avatar}
											/>
									  )}
							</Avatar>
							<span>
								{senderTime < receiverTime
									? senderData?.name
										? senderData.name
										: 'Player One'
									: receiverData?.name
									? receiverData.name
									: 'Player 2'}{' '}
								won the match
							</span>
						</h5>
					</>
				)
			)}
			{accepted && !end && <h4> {constants.show_challenge.accepted}</h4>}
		</ListItem>
	);
};

export default ShowChallenges;
