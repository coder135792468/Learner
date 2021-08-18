import React from 'react';
import {
	Paper,
	makeStyles,
	Box,
	ListItem,
	List,
	ListItemText,
	ListItemIcon,
	Avatar,
} from '@material-ui/core';
import { PageHeader } from '../layouts';
import js from '../layouts/logo/js.png';
import { Helmet } from 'react-helmet';
import { js_intro_course, constants } from '../utils';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},

	item: {
		padding: '20px 10px',
	},
}));

const CourseScreen = ({ history }) => {
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>Course</title>
			</Helmet>
			<Paper className={classes.root}>
				<PageHeader title={constants.course.title} />
				<Box>
					<List>
						{js_intro_course?.map((ele, index) => (
							<ListItem
								onClick={() => history.push(`/course/${index + 1}`)}
								key={index + 1}
								button
								className={classes.item}
							>
								<ListItemIcon>
									<Avatar>
										<img
											alt='Cant Load'
											src={js}
											style={{ width: '100%', height: '100%' }}
										/>
									</Avatar>
								</ListItemIcon>
								<ListItemText
									primary={ele.name}
									secondary={`${ele.pages.length}  ${
										ele.pages.length > 1 ? 'Pages' : 'Page'
									}`}
								/>
							</ListItem>
						))}
					</List>
				</Box>
			</Paper>
		</>
	);
};

export default CourseScreen;
