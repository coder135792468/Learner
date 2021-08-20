import React, { useState, useEffect, useContext } from 'react';
import { makeStyles, Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import {
	PageHeader,
	Challenge,
	ChallengeEditor,
	ChallengeOutput,
	DialogBox,
	Loader,
} from '../layouts';
import { useToasts } from 'react-toast-notifications';
import { Helmet } from 'react-helmet';
import { code_coach, constants } from '../utils';
import { Redirect } from 'react-router-dom';

import { ChallengeContext, AuthContext, SocketContext } from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		width: '100vw',
	},
}));

const CodeCoach = ({ match, location, history }) => {
	const { addToast } = useToasts();

	/////////////////////////////////////////////////////////////////
	const {
		addChallenge,
		loading,
		getChallengeById,
		challenge,
		updateChallenge,
		clearError,
	} = useContext(ChallengeContext);
	const { user } = useContext(AuthContext);
	const io = useContext(SocketContext);

	///////////////////////////////////////////////////////////

	const index = match.params.id - 1;
	let params, live, receiver;
	if (location.search) {
		params = location.search.split('?live=')[1].split('&receiver=');
		live = params[0];
		receiver = params[1];
	}

	///////////////////////////////////////////////////////////////
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [code, setCode] = useState(code_coach[index].code);
	const [solved, setSolved] = useState(0);
	const [time, setTime] = useState(0);
	const [completed, setCompleted] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	/////////////////////////////////////////////////////////////////

	/////////////////////////////////////////////////////////////////
	useEffect(() => {
		setCode(code);
	}, [code]);

	useEffect(() => {
		clearError();
		if (user?.token && live === 'false') {
			getChallengeById(receiver, user.token);
		}

		//eslint-disable-next-line
	}, []);
	useEffect(() => {
		let interval;
		if (parseInt(time % 60) < 10 && live && !openDialog) {
			interval = setInterval(() => {
				setTime(time + 1);
			}, 1000 * 60);
		} else {
			setOpenDialog(true);
		}

		return () => clearInterval(interval);
		//eslint-disable-next-line
	}, [time, setCompleted]);

	useEffect(() => {
		if (completed) {
			setOpenDialog(true);
		}
	}, [completed, setCompleted]);
	//////////////////////////////////////////////////////////////

	const sendChallenge = async () => {
		//add a challenge
		if (live === 'true') {
			const challengeData = {
				sender: user._id,
				index: index + 1,
				receiver,
				senderTime: completed ? time : 10000000,
			};
			if (user.token) {
				await addChallenge(challengeData, user.token);
				io.emit('add', user.name);
			} else {
				history.push('/');
			}
			addToast(constants.code_coach.add_msg, {
				appearance: 'success',
			});
		} else {
			const challengeData = {
				end: true,
				receiverTime: completed ? time : 10000000,
			};
			io.emit('endgame', challenge._id);

			await updateChallenge(challengeData, challenge._id, user.token);
			addToast(constants.code_coach.final_msg, {
				appearance: 'success',
			});
		}

		history.push('/');
	};

	return (
		<>
			<Helmet>
				<title>Challenge</title>
			</Helmet>
			<Paper className={classes.root}>
				{challenge?.end && <Redirect to='/' />}
				{challenge?.live === 'true' && !challenge?.accepted && (
					<Redirect to='/' />
				)}
				{live && !user?._id && <Redirect to='/' />}
				{loading && <Loader />}
				{params && (
					<DialogBox
						open={openDialog}
						setOpen={setOpenDialog}
						onClick={sendChallenge}
						text={constants.dialog_box.header}
					/>
				)}

				<PageHeader
					title={code_coach[index].title}
					optional={{
						total: code_coach[index].testCases.length,
						index: solved,
					}}
					push='/'
					live={{ live, time }}
				/>
				<AppBar position='sticky' elevation={0}>
					<Tabs
						value={value}
						onChange={(e, nv) => setValue(nv)}
						aria-label='HTML CSS & JS sections'
					>
						<Tab label='Challenge' />
						<Tab label='Code' />
						<Tab label='Output' />
					</Tabs>
				</AppBar>

				<div hidden={value !== 0}>
					{value === 0 && (
						<Challenge setValue={setValue} challenge={code_coach[index]} />
					)}
				</div>
				<div hidden={value !== 1}>
					{value === 1 && (
						<ChallengeEditor
							live={live}
							setCode={setCode}
							setValue={setValue}
							code={code}
						/>
					)}
				</div>
				<div hidden={value !== 2}>
					{value === 2 && (
						<ChallengeOutput
							code={code}
							setCompleted={setCompleted}
							setSolved={setSolved}
							test_cases={code_coach[index].testCases}
						/>
					)}
				</div>
			</Paper>
		</>
	);
};

export default CodeCoach;
