import React, { useState, useEffect } from 'react';
import { makeStyles, Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import {
	PageHeader,
	Challenge,
	ChallengeEditor,
	ChallengeOutput,
} from '../layouts';
import { code_coach } from '../utils';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		width: '100vw',
	},
}));

const CodeCoach = ({ match }) => {
	const index = match.params.id - 1;

	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [code, setCode] = useState(code_coach[index].code);
	const [solved, setSolved] = useState(0);
	useEffect(() => {
		setCode(code);
	}, [code]);
	return (
		<Paper className={classes.root}>
			<PageHeader
				title={code_coach[index].title}
				optional={{ total: code_coach[index].testCases.length, index: solved }}
			/>
			<AppBar position='sticky' elevation={0}>
				<Tabs
					value={value}
					onChange={(e, nv) => setValue(nv)}
					aria-label='simple tabs example'
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
					<ChallengeEditor setCode={setCode} setValue={setValue} code={code} />
				)}
			</div>
			<div hidden={value !== 2}>
				{value === 2 && (
					<ChallengeOutput
						code={code}
						setSolved={setSolved}
						test_cases={code_coach[index].testCases}
					/>
				)}
			</div>
		</Paper>
	);
};

export default CodeCoach;
