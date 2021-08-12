import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';

const PageHeader = ({
	btn_data,
	title,
	push,
	position = 'sticky',
	optional,
}) => {
	const history = useHistory();
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
					<IconButton onClick={btn_data.onClick} style={{ marginLeft: 'auto' }}>
						<SaveIcon />
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default PageHeader;
