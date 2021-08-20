import React, { useContext } from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
	makeStyles,
	Switch,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import InfoIcon from '@material-ui/icons/Info';

import { ThemeContext } from '../context';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	sideBarList: {
		padding: '0 10px',
		[theme.breakpoints.up('xs')]: {
			minWidth: '150px',
		},
		[theme.breakpoints.up('md')]: {
			minWidth: '300px',
		},
		[theme.breakpoints.up('sm')]: {
			minWidth: '300px',
		},
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.type === 'dark' ? '#fff' : '#000',
	},
}));

const data = [
	{
		name: 'Profile',
		path: '/profile',
		private: true,
		icon: PersonOutlineIcon,
	},
	{
		name: 'Code Playground',
		path: '/',
		private: false,
		icon: CodeIcon,
	},
	{
		name: 'Course',
		path: '/course',
		private: false,
		icon: LibraryBooksIcon,
	},
	{
		name: 'Quiz',
		path: '/quiz',
		private: false,
		icon: LiveHelpIcon,
	},
	{
		name: 'Challenge',
		path: '/challenges',
		private: false,
		icon: SportsKabaddiIcon,
	},
	{
		name: 'Community Challenges',
		path: '/live',
		private: true,
		icon: LiveTvIcon,
	},
];
const SideHeader = ({ openMenu, setOpenMenu, closeDrawer, user }) => {
	const classes = useStyles();

	const { darkTheme, setTheme } = useContext(ThemeContext);
	const logout = () => {
		localStorage.removeItem('userInfo');
		window.location.href = 'login';
	};

	const optionLists = () => (
		<>
			<List className={classes.sideBarList}>
				{data.map((ele) => (
					<>
						{(user?._id || !ele.private) && (
							<Link to={ele.path} className={classes.link}>
								<ListItem button>
									<ListItemIcon>{<ele.icon />}</ListItemIcon>
									<ListItemText primary={ele.name} />
								</ListItem>
							</Link>
						)}
					</>
				))}
				<ListItem>
					<ListItemIcon>
						<Switch
							checked={darkTheme}
							onChange={setTheme}
							name='checkedA'
							inputProps={{ 'aria-label': 'secondary checkbox' }}
						/>
					</ListItemIcon>
					<ListItemText primary={'Dark Mode'} />
				</ListItem>
			</List>
			<Divider />
			{user?._id && (
				<List style={{ padding: '10px 20px' }}>
					<Link to='/about' className={classes.link}>
						<ListItem button>
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText primary={'Feedback'} />
						</ListItem>
					</Link>
					<Link to='/setting' className={classes.link}>
						<ListItem button>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary={'Settings'} />
						</ListItem>
					</Link>

					<ListItem button onClick={logout}>
						<ListItemIcon>
							<NotificationsIcon />
						</ListItemIcon>
						<ListItemText primary='Logout' />
					</ListItem>
					<ListItem>
						<p align='center'>
							<span>
								&copy; Made By{' '}
								<a
									className={classes.link}
									target='_blank'
									rel='noreferrer'
									href='https://github.com/coder135792468'
								>
									Coder
								</a>
							</span>
						</p>
					</ListItem>
				</List>
			)}
		</>
	);
	return (
		<Drawer anchor={'left'} open={openMenu} onClose={() => setOpenMenu(false)}>
			<Typography variant='h6' style={{ margin: '10px' }}>
				Welcome {user?.name ? user.name : 'User'}
			</Typography>
			{optionLists()}
		</Drawer>
	);
};

export default SideHeader;
