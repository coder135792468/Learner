import React, { useState, useContext } from 'react';
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
	IconButton,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import { constants } from '../utils';
import { CodeContext } from '../context';

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
		backgroundColor: theme.palette.type === 'dark' ? '#444' : '#dfdfdf',
		padding: '5px 0',
		'& *': {
			margin: 'auto',
		},
	},
	comment_box: {
		height: 'calc(100% - 50px)',
		backgroundColor: theme.palette.type === 'dark' ? '#666' : '#efefef',
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
	const { deleteComment } = useContext(CodeContext);

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

	const deleteUserComment = async (id) => {
		//deleteUserComment
		await deleteComment(_id, me?.token, id);
		setComments(comment.filter((ele) => ele._id !== id));
	};

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
							{comment?.map((ele) => (
								<ListItem key={ele._id} className={classes.comment_item}>
									<ListItemIcon>
										<Avatar style={{ background: '#efefef' }}>
											{ele?.avatar && <img alt='Cant Load' src={ele.avatar} />}
										</Avatar>
									</ListItemIcon>
									<ListItemText primary={ele?.name} secondary={ele?.text} />
									{me?._id === ele.user && (
										<IconButton
											onClick={() => deleteUserComment(ele._id)}
											color='secondary'
											variant='contained'
										>
											<DeleteIcon />
										</IconButton>
									)}
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
							<h2>{constants.profile.login_comment}</h2>
						</Box>
					)}
				</Paper>
			</Drawer>
		</>
	);
};

export default Comments;
