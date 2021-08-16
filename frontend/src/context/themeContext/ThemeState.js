import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';
import { SET_THEME } from './types';
import { useReducer } from 'react';

const ThemeState = ({ children }) => {
	const initialState = {
		darkTheme: false,
	};
	const [state, dispatch] = useReducer(ThemeReducer, initialState);

	const setTheme = () => {
		dispatch({ type: SET_THEME, payload: !state.darkTheme });
	};
	return (
		<ThemeContext.Provider
			value={{
				darkTheme: state.darkTheme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
export default ThemeState;
