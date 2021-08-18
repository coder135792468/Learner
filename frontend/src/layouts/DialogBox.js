import React from 'react';
import {
	Button,
	Dialog,
	DialogContent,
	DialogActions,
	DialogTitle,
	DialogContentText,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { constants } from '../utils';

const DialogBox = ({ open, setOpen, onClick, text }) => {
	const history = useHistory();
	return (
		<Dialog
			open={open}
			onClose={() => {
				setOpen(false);
				history.push('/');
			}}
		>
			<DialogTitle style={{ cursor: 'pointer' }}>
				{constants.dialog_box.title}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>{text}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => {
						setOpen(false);
						history.push('/');
					}}
					color='primary'
				>
					{constants.dialog_box.cancel}
				</Button>
				<Button
					onClick={() => {
						onClick();
						setOpen(false);
					}}
					color='primary'
					variant='contained'
				>
					{constants.dialog_box.submit_btn}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogBox;
