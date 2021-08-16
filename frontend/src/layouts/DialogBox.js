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
			<DialogTitle style={{ cursor: 'pointer' }}>Send Challenge</DialogTitle>
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
					Cancel
				</Button>
				<Button
					onClick={() => {
						onClick();
						setOpen(false);
					}}
					color='primary'
					variant='contained'
				>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogBox;
