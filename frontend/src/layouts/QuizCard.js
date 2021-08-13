import React from 'react';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Button,
	Typography,
	makeStyles,
	CardActions,
	Chip,
} from '@material-ui/core';
import js from './logo/js.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '700px',
		width: '80%',
		margin: '20px auto',
		padding: '10px 2%',
		boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
		borderRadius: '30px',
		background:
			theme.palette.type === 'dark'
				? theme.palette.primary.dark
				: theme.palette.primary,
	},
	logo: {
		width: '100px',
		height: '100px',
		margin: '10px auto',
	},
	actions: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	btn: {
		minWidth: '150px',
	},
}));
const QuizCard = ({ id, totalQuiz, title }) => {
	const history = useHistory();
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt={title}
					height='140'
					image={js}
					title={title}
					className={classes.logo}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' align='center' component='h2'>
						{title}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.actions}>
				<Chip label={totalQuiz + ' Quizzes'} />
				<Button
					onClick={() => history.push(`/quiz/${id}`)}
					className={classes.btn}
					color='secondary'
					variant='contained'
				>
					View
				</Button>
			</CardActions>
		</Card>
	);
};

export default QuizCard;
