import React from 'react';
import {
	ListItem,
	ListItemIcon,
	Avatar,
	ListItemText,
	Button,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	item: {
		backgroundColor: theme.palette.type === 'dark' ? '#444' : '#efefef',
		margin: '14px auto',
		maxWidth: '500px',
		padding: '30px',
		borderRadius: '50px',
	},
	avatar: {
		width: '100%',
		height: '100%',
	},
}));
const LivePlayUsers = ({ id, name, avatar, onClick }) => {
	const classes = useStyles();

	return (
		<ListItem className={classes.item}>
			<ListItemIcon>
				<Avatar style={{ color: 'white' }}>
					{avatar && <img className={classes.avatar} alt={name} src={avatar} />}
				</Avatar>
			</ListItemIcon>
			<ListItemText primary={name} />
			<Button
				onClick={() => onClick({ id, name, avatar })}
				color='primary'
				variant='contained'
			>
				Play
			</Button>
		</ListItem>
	);
};

export default LivePlayUsers;
