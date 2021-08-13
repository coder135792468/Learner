import React from 'react';
import { Paper, makeStyles, Typography, Box, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	root: {
		height: 'calc(100vh - 120px)',
		width: '100vw',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	desc: {
		backgroundColor: theme.palette.type === 'dark' ? 'grey' : '#efefef',
		width: '80vw',
		padding: '20px',
		borderRadius: '20px',
		margin: '10px auto',
		whiteSpace: 'pre-wrap',
	},
	heading: {
		width: '80vw',
		margin: '5px 0 0 5vw',
	},
}));

const Challenge = ({ challenge, setValue }) => {
	const { description, input_format, output_format, input_demo, output_demo } =
		challenge;
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<Typography variant='h5' className={classes.heading}>
				Description:
			</Typography>
			<Typography variant='p' className={classes.desc}>
				{description}
			</Typography>
			<Typography variant='h6' className={classes.heading}>
				Sample Input:
			</Typography>
			<Typography variant='p' className={classes.desc}>
				{input_format}
			</Typography>
			<Typography variant='h6' className={classes.heading}>
				Sample Output:
			</Typography>
			<Typography variant='p' className={classes.desc}>
				{output_format}
			</Typography>
			<Typography variant='h6' className={classes.heading}>
				Input Demo:
			</Typography>
			<Typography variant='p' className={classes.desc}>
				{input_demo}
			</Typography>
			<Typography variant='h6' className={classes.heading}>
				Output Demo:
			</Typography>
			<Typography variant='p' className={classes.desc}>
				{output_demo}
			</Typography>
			<Box ml='auto' mt={3} mr={3}>
				<Button
					onClick={() => setValue(1)}
					color='secondary'
					variant='contained'
				>
					Start Solving
				</Button>
			</Box>
		</Paper>
	);
};

export default Challenge;
