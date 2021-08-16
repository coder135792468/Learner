import {
	GET_ALL_CHALLENGES,
	ADD_CHALLENGE,
	GET_CHALLENGE,
	CLEAR_ERROR,
	ERROR,
	SET_LOADING,
	CLEAR_CHALLENGES,
} from './types';

const ChallengeReducer = (state, { payload, type }) => {
	switch (type) {
		case GET_ALL_CHALLENGES:
			return { ...state, all_challenges: payload };
		case GET_CHALLENGE:
			return { ...state, challenge: payload };
		case ADD_CHALLENGE:
			return { ...state, challenge: payload };
		case SET_LOADING:
			return { ...state, loading: payload };
		case ERROR:
			return { ...state, error: payload };
		case CLEAR_ERROR:
			return { ...state, error: null };
		case CLEAR_CHALLENGES:
			return {
				...state,
				challenge: null,
			};
		default:
			return state;
	}
};
export default ChallengeReducer;
