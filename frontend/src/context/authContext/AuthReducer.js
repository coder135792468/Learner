import { LOGIN, ERROR, CLEAR_ERROR, GET_ALL_USER, CLEAR_USERS } from './types';

const AuthReducer = (state, { payload, type }) => {
	switch (type) {
		case LOGIN:
			return { ...state, user: payload, login: true };
		case GET_ALL_USER:
			return {
				...state,
				allusers: [...state.allusers, ...payload.users],
				total_user_pages: payload.pages,
			};
		case ERROR:
			return { ...state, error: payload };
		case CLEAR_ERROR:
			return { ...state, error: null };
		case CLEAR_USERS:
			return { ...state, allusers: [] };
		default:
			return state;
	}
};

export default AuthReducer;
