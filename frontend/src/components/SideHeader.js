import React from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

const SideHeader = ({ openMenu, setOpenMenu, closeDrawer, user }) => {
	const history = useHistory();
	const logout = () => {
		localStorage.removeItem('userInfo');
		window.location.href = 'login';
	};

	const optionLists = () => (
		<>
			<List style={{ padding: '0 20px' }}>
				{['Profile', 'Code', 'Course', 'Quiz'].map((text, index) => (
					<ListItem
						button
						key={text}
						onClick={() => closeDrawer(text.toLowerCase())}
					>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			{user?._id && (
				<List style={{ padding: '10px 20px' }}>
					<ListItem button onClick={() => closeDrawer('setting')}>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary={'Settings'} />
					</ListItem>
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
