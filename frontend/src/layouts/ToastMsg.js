import React, { useState } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const data = {
	vertical: 'bottom',
	horizontal: 'center',
};

const ToastMsg = ({ msg, direction = data }) => {
	const [open, setOpen] = useState(true);

	return (
		<Snackbar
			anchorOrigin={direction}
			open={open}
			autoHideDuration={6000}
			onClose={() => setOpen(false)}
			message={msg}
			severity='info'
			action={
				<IconButton
					size='small'
					aria-label='close'
					color='inherit'
					onClick={() => setOpen(false)}
				>
					<CloseIcon fontSize='small' />
				</IconButton>
			}
		/>
	);
};

export default ToastMsg;
