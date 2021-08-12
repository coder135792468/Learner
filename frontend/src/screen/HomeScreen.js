import React, { useContext, useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
	Paper,
	Menu,
	MenuItem,
	IconButton,
	Typography,
	AppBar,
	Toolbar,
	Button,
	InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { AuthContext, CodeContext } from '../context';
import { Link } from 'react-router-dom';
import CodeScreen from './CodeScreen';
import { SideHeader } from '../components';
import { Loader } from '../layouts';

const useStyles = makeStyles((theme) => ({
	main: {
		width: '100vw',
		height: '100vh',
		overflow: 'auto',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	search: {
		position: 'relative',
		right: theme.spacing(2),
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		maxWidth: '130px',
	},
	searchIcon: {
		padding: '0 3px',
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		paddingLeft: '2rem',
		width: '100%',
	},
	avatar: {
		width: '30px',
		height: '30px',
		borderRadius: '50%',
	},
}));
const HomeScreen = ({ history }) => {
	const authContext = useContext(AuthContext);
	const { getUserData, user } = authContext;

	const codeContext = useContext(CodeContext);
	const { searchCode, clearSearch, loading } = codeContext;

	useEffect(() => {
		if (!user?.name) {
			getUserData();
		}
		//eslint-disable-next-line
	}, []);

	const classes = useStyles();
	const [text, setText] = useState('');

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const [openMenu, setOpenMenu] = useState(false);
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (page) => {
		setAnchorEl(null);
		history.push(page);
	};
	const closeDrawer = (txt) => {
		setOpenMenu(false);
		history.push(txt === 'code' ? '/' : txt);
	};
	useEffect(() => {
		if (text.trim().length === 0) {
			clearSearch();
		}
		//eslint-disable-next-line
	}, [text]);
	const search = ({ target: { value } }) => {
		setText(value);
		searchCode(text);
	};

	return (
		<Paper className={classes.main}>
			<SideHeader
				closeDrawer={closeDrawer}
				setOpenMenu={setOpenMenu}
				openMenu={openMenu}
				user={user}
			/>
			{loading && <Loader />}
			<AppBar position='sticky'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
						onClick={() => setOpenMenu(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='p' className={classes.title}>
						Code
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search…'
							value={text}
							onChange={search}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					{user?.name ? (
						<>
							<IconButton
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'
							>
								{user?.avatar ? (
									<img
										className={classes.avatar}
										src={user.avatar}
										alt={user.name}
									/>
								) : (
									<AccountCircle />
								)}
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={() => handleClose('profile')}>
									Profile
								</MenuItem>
								<MenuItem onClick={() => handleClose('setting')}>
									Profile Settings
								</MenuItem>
							</Menu>
						</>
					) : (
						<Link to='/login' style={{ textDecoration: 'none' }}>
							<Button>Login</Button>
						</Link>
					)}
				</Toolbar>
			</AppBar>
			<CodeScreen />
			{user?.name && (
				<IconButton
					onClick={() => history.push('add')}
					style={{
						position: 'fixed',
						bottom: '30px',
						right: '30px',
						background: '#4488ff',
					}}
				>
					<AddIcon />
				</IconButton>
			)}
		</Paper>
	);
};

export default HomeScreen;
