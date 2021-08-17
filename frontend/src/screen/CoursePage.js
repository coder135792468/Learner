import React, { useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { PageHeader } from '../layouts';
import { CourseData } from '../components';
import { js_intro_course } from '../utils';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
	},
}));

const CoursePage = ({ match }) => {
	const id = match.params.id;
	const { name, pages } = js_intro_course[id - 1];
	const [index, setIndex] = useState(1);
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>{name}</title>
			</Helmet>
			<Paper className={classes.root}>
				<PageHeader title={name} optional={{ index, total: pages.length }} />
				<CourseData pages={pages} setIndex={setIndex} />
			</Paper>
		</>
	);
};

export default CoursePage;
