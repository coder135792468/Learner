import React, { useEffect, useState, useContext } from 'react';
import {
	makeStyles,
	List,
	ListItem,
	Box,
	ListItemIcon,
	Avatar,
	ListItemText,
	Button,
	Chip,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { CodeContext, AuthContext } from '../context';
import { Comments } from '../components';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '90%',
	},
	codeItem: {
		background: theme.palette.type === 'dark' ? '#333' : '#efefef',
		margin: '20px auto',
		borderRadius: 20,
		padding: 20,
		maxWidth: '400px',
		width: '80%',
		boxShadow: '0 0 20px 0px rgba(20,20,0,.1)',
	},
	avatar: {
		backgroundSize: 'cover',
		width: '100%',
		height: '100%',
	},
}));

const Code = ({ code }) => {
	const history = useHistory();
	const { _id, user, likes, comments, name, lang } = code;
	const [userData, setData] = useState('');

	const { likeCode, addComment } = useContext(CodeContext);
	const { user: me, getUserData } = useContext(AuthContext);

	const [like, setLike] = useState(likes?.length || 0);
	const [comment, setComment] = useState(comments);

	const [liked, setLiked] = useState(
		!me?._id ? false : likes?.some((ele) => ele.user === me._id)
	);
	const [commented, setCommented] = useState(
		!me?._id ? false : comment?.some((ele) => ele.user === me._id)
	);

	const classes = useStyles();
	const getUserById = async (user) => {
		const { data } = await axios.get(`/api/user/${user}`);
		setData(data);
	};
	useEffect(() => {
		getUserById(user);
		getUserData();
		//eslint-disable-next-line
	}, []);
	useEffect(() => {
		setLike(likes?.length);
		setComment(comments);
		if (me?._id) {
			setLiked(likes?.some((ele) => ele.user === me._id));
			setCommented(comment?.some((ele) => ele.user === me._id));
		}
		//eslint-disable-next-line
	}, [likes, comments]);

	const likeUserCode = async () => {
		if (me?._id) {
			await likeCode(_id, me.token);
			if (!liked) {
				setLike(like + 1);
			} else {
				console.log(' i am triggered');
				setLike(like - 1);
			}
			setLiked(!liked);
		} else {
			alert('Login to like');
		}
	};

	return (
		<Box my='3'>
			<List className={classes.codeItem} style={{ padding: '10px 20px' }}>
				<ListItem button onClick={() => history.push(`/code/${_id}`)}>
					<ListItemIcon>
						<Avatar style={{ background: 'white' }}>
							{userData?.avatar ? (
								<img
									className={classes.avatar}
									src={userData?.avatar}
									alt={userData.name}
								/>
							) : (
								<AccountCircleIcon />
							)}
						</Avatar>
					</ListItemIcon>
					<ListItemText
						primary={
							name?.length > 10
								? name.substring(0, 10) + '...'
								: name || 'Untitled'
						}
						secondary={userData.name || 'anonymous'}
					/>
				</ListItem>
				<ListItem style={{ justifyContent: 'center' }}>
					<Chip label={lang} color='secondary' />

					<Button onClick={likeUserCode} style={{ margin: '0 20px' }}>
						<span>{like}</span>
						<FavoriteIcon style={{ color: liked && 'tomato' }} />
					</Button>

					<Comments
						me={me}
						_id={_id}
						addComment={addComment}
						comment={comment}
						commented={commented}
					/>
				</ListItem>
			</List>
		</Box>
	);
};

export default Code;
