import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useContext } from 'react';
import { ThemeContext } from '../context';
const darkTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#2196F3',
		},
		typography: {
			fontFamily: '"Poppins", sans-serif',
			color: 'white',
		},
		text: {
			primary: '#fff',
			hint: '#fff',
		},
		background: {
			paper: '#19202b',
		},
	},
});

const lightTheme = createTheme({
	palette: {
		typography: {
			fontFamily: '"Poppins", sans-serif',
		},
	},
});

const DarkTheme = ({ children }) => {
	const { darkTheme: theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};
export default DarkTheme;
