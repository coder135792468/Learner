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
				{user?._id && (
					<Link to='/profile' className={classes.link}>
						<ListItem button>
							<ListItemIcon>
								<PersonOutlineIcon />
							</ListItemIcon>
							<ListItemText primary={'Profile'} />
						</ListItem>
					</Link>
				)}
				<Link to='/' className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<CodeIcon />
						</ListItemIcon>
						<ListItemText primary={'Code Playground'} />
					</ListItem>
				</Link>
				<Link to='/course' className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<LibraryBooksIcon />
						</ListItemIcon>
						<ListItemText primary={'Course'} />
					</ListItem>
				</Link>
				<Link to='/quiz' className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<LiveHelpIcon />
						</ListItemIcon>
						<ListItemText primary={'Quiz'} />
					</ListItem>
				</Link>
				<Link to='/challenges' className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<SportsKabaddiIcon />
						</ListItemIcon>
						<ListItemText primary={'Challenge'} />
					</ListItem>
				</Link>
				<Link to='/live' className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<LiveTvIcon />
						</ListItemIcon>
						<ListItemText primary={'Community Challenge'} />
					</ListItem>
				</Link>
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
