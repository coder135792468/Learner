import React, { useEffect, useState } from 'react';
import {
	makeStyles,
	Button,
	Drawer,
	Paper,
	Box,
	TextField,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Avatar,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	comment_con: {
		height: '60vh',
		overflow: 'auto',
		position: 'relative',
	},
	footer: {
		position: 'fixed',
		bottom: '2px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		backgroundColor: theme.palette.type == 'dark' ? '#444' : '#efefef',
		padding: '5px 0',
		'& *': {
			margin: 'auto',
		},
	},
	comment_box: {
		height: 'calc(100% - 50px)',
		backgroundColor: theme.palette.type == 'dark' ? '#666' : '#fff',
		overflow: 'auto',
	},
	comment_item: {
		backgroundColor: theme.palette.background.paper,
		width: '90%',
		margin: '10px 5%',
		borderRadius: '40px',
	},
}));

const Comments = ({ _id, comment: comments, commented, me, addComment }) => {
	const classes = useStyles();
	const [state, setState] = useState(false);
	const [text, setText] = useState('');

	const [comment, setComments] = useState(comments);

	const sendComment = async () => {
		if (me?._id) {
			setComments([
				...comment,
				{
					text,
					...me,
				},
			]);

			await addComment(_id, me.token, text);
			setText('');
		} else {
			alert('Login to comment');
		}
	};

	useEffect(() => {
		setComments(comments);
	}, [comments]);
	return (
		<>
			<Button onClick={() => setState(true)}>
				<span>{comment?.length}</span>
				<CommentIcon style={{ color: commented && 'tomato' }} />
			</Button>
			<Drawer
				anchor={'bottom'}
				open={state}
				onClose={() => setState(false)}
				onOpen={() => setState(true)}
			>
				<Paper className={classes.comment_con}>
					<Box className={classes.comment_box}>
						<List>
							{comment.map((ele) => (
								<ListItem className={classes.comment_item}>
									<ListItemIcon>
										<Avatar style={{ background: '#efefef' }}>
											{ele?.avatar && <img src={ele.avatar} />}
										</Avatar>
									</ListItemIcon>
									<ListItemText primary={ele?.name} secondary={ele?.text} />
								</ListItem>
							))}
						</List>
					</Box>
					{me?._id ? (
						<Box className={classes.footer}>
							<TextField
								value={text}
								onChange={({ target: { value } }) => setText(value)}
								placeholder='Add a Comment'
							/>
							<Button onClick={sendComment} color='primary' variant='contained'>
								<SendIcon />
							</Button>
						</Box>
					) : (
						<Box className={classes.footer}>
							<h2>Login to Comment</h2>
						</Box>
					)}
				</Paper>
			</Drawer>
		</>
	);
};

export default Comments;
