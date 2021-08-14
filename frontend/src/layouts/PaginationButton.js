import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '30px',
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const PaginationButton = ({ pageCount, page, profile = false }) => {
	const classes = useStyles();
	const history = useHistory();

	const onChange = (e) => {
		if (e.target.textContent !== '1') {
			history.push(
				profile
					? `/profile/page/${e.target.textContent}`
					: `/page/${e.target.textContent}`
			);
		} else {
			history.push(profile ? '/profile' : '/');
		}
	};
	return (
		<div className={classes.root}>
			<Pagination
				onChange={onChange}
				count={pageCount}
				defaultPage={page}
				color='primary'
				hidePrevButton
				hideNextButton
			/>
		</div>
	);
};

export default PaginationButton;
