import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import MoreIcon from '@material-ui/icons/MoreVert';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useToasts } from 'react-toast-notifications';

const LINK = `http://localhost:3000/deploy`;

const PageHeader = ({
	btn_data,
	title,
	push,
	position = 'sticky',
	optional,
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
					<ArrowBackIos />
				</IconButton>
				<p>{title}</p>
				{optional && (
					<strong style={{ marginLeft: 'auto' }}>
						{optional.total} / {optional.index}
					</strong>
				)}
				{btn_data?.show && (
					<>
						<IconButton
							onClick={() => btn_data.onClick('save')}
							style={{ marginLeft: 'auto' }}
						>
							<SaveIcon />
						</IconButton>
						<IconButton
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={(e) => setAnchorEl(e.currentTarget)}
							color='inherit'
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
							<MenuItem onClick={() => handleClose('rename')}>
								Rename Code
							</MenuItem>
							<MenuItem onClick={() => handleClose('delete')}>
								Delete Code
							</MenuItem>

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
