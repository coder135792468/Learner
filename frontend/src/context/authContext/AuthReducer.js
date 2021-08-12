import { LOGIN, ERROR, CLEAR_ERROR, GET_ALL_USER } from './types';

const AuthReducer = (state, { payload, type }) => {
	switch (type) {
		case LOGIN:
			return { ...state, user: payload, login: true };
		case GET_ALL_USER:
			return { ...state, users: payload };
		case ERROR:
			return { ...state, error: payload };
		case CLEAR_ERROR:
			return { ...state, error: null };
		default:
			return state;
	}
};

export default AuthReducer;
