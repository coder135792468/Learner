import {
	GET_CODE,
	ERROR,
	CLEAR_ERROR,
	GET_CODE_BY_ID,
	CLEAR_CODE_BY_ID,
	SEARCH_CODE,
	CLEAR_SARCH,
	SET_LOADING,
	GET_MY_CODE,
} from './types';

const CodeReducer = (state, { type, payload }) => {
	switch (type) {
		case GET_CODE:
			return { ...state, codes: payload.codes, totalPages: payload.pages };
		case GET_CODE_BY_ID:
			return { ...state, current_code: payload };
		case GET_MY_CODE:
			return {
				...state,
				myCodes: payload.codes,
				totalCodePages: payload.pages,
			};
		case CLEAR_CODE_BY_ID:
			return { ...state, current_code: null };
		case SEARCH_CODE:
			return {
				...state,
				filter: state.codes.filter((code) =>
					code.name.match(new RegExp(`${payload}`, 'gi'))
				),
			};
		case SET_LOADING:
			return { ...state, loading: payload };
		case ERROR:
			return { ...state, error: payload };
		case CLEAR_ERROR:
			return { ...state, error: null };
		case CLEAR_SARCH:
			return { ...state, filter: null };
		default:
			return state;
	}
};
export default CodeReducer;
