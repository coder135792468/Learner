import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	MenuItem,
	Menu,
	Button,
} from '@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import MoreIcon from '@material-ui/icons/MoreVert';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useToasts } from 'react-toast-notifications';

const LINK = `https://learner-v1.herokuapp.com/deploy`;

const PageHeader = ({
	btn_data,
	title,
	push,
	position = 'sticky',
	optional,
	live,
	list,
}) => {
	const { addToast } = useToasts();
	const history = useHistory();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClose = (txt) => {
		setAnchorEl(null);
		if (txt === 'deploy') {
			history.push(`/deploy/${btn_data.id}`);
		} else {
			btn_data.onClick(txt);
		}
	};
	return (
		<AppBar position={position}>
			<Toolbar>
				<IconButton
					onClick={() => {
						push ? history.push(push) : history.goBack();
					}}
				>
					<ArrowBackIos style={{ color: 'white' }} />
				</IconButton>
				<p>{title}</p>
				{optional && (
					<strong style={{ marginLeft: 'auto' }}>
						{optional.total} / {optional.index}
					</strong>
				)}
				{live?.live && (
					<span style={{ margin: '0 10px', fontSize: '12px' }}>
						<b>Time: </b>
						{parseInt(live.time % 60)}/10 mins
					</span>
				)}
				{list && (
					<Button
						onClick={list.onClick}
						color='secondary'
						variant='contained'
						style={{ marginLeft: 'auto', fontSize: '.6rem' }}
					>
						{list.text}
					</Button>
				)}

				{btn_data?.play && (
					<>
						{btn_data.show && (
							<IconButton
								onClick={() => btn_data.onClick('save')}
								style={{ marginLeft: 'auto' }}
							>
								<SaveIcon style={{ color: 'white' }} />
							</IconButton>
						)}
						<IconButton
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={(e) => setAnchorEl(e.currentTarget)}
							color='inherit'
							style={{ marginLeft: !btn_data.show && 'auto' }}
						>
							<MoreIcon />
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
							{btn_data.show && (
								<MenuItem onClick={() => handleClose('rename')}>
									Rename Code
								</MenuItem>
							)}
							{btn_data.show && (
								<MenuItem onClick={() => handleClose('delete')}>
									Delete Code
								</MenuItem>
							)}

							<MenuItem onClick={() => handleClose('deploy')}>
								Go to Deployed Page
							</MenuItem>
							<CopyToClipboard
								text={`${LINK}/${btn_data.id}`}
								onCopy={() =>
									addToast('Copied to Clipboard', { appearance: 'success' })
								}
							>
								<MenuItem onClick={handleClose}>Copy Deplyed Url</MenuItem>
							</CopyToClipboard>
						</Menu>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default PageHeader;
