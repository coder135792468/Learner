import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
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

const DarkTheme = ({ children, theme }) => {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
export default DarkTheme;
