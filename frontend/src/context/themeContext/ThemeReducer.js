import { SET_THEME } from './types';

const ThemeReducer = (state, { payload, type }) => {
	switch (type) {
		case SET_THEME:
			return {
				...state,
				darkTheme: payload,
			};

		default:
			return state;
	}
};

export default ThemeReducer;
