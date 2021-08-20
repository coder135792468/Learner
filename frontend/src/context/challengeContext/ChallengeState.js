import { useReducer } from 'react';
import ChallengeContext from './ChallengeContext';
import ChallengeReducer from './ChallengeReducer';
import {
	GET_ALL_CHALLENGES,
	ADD_CHALLENGE,
	GET_CHALLENGE,
	ERROR,
	CLEAR_ERROR,
	SET_LOADING,
	UPDATE_CHALLENGE,
	CLEAR_CHALLENGES,
} from './types';
import axios from 'axios';

const ChallengeState = ({ children }) => {
	const initialState = {
		error: null,
		loading: false,
		challenge: null,
		all_challenges: null,
	};

	const [state, dispatch] = useReducer(ChallengeReducer, initialState);

	const getAllChallenges = async (token, loading = true) => {
		clearError();
		if (loading) setLoading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await axios.get('/api/challenges', config);
			dispatch({ type: GET_ALL_CHALLENGES, payload: data });
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		} finally {
			setLoading(false);
		}
	};

	const addChallenge = async (value, token) => {
		clearChallenges();
		clearError();
		setLoading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await axios.post(`/api/challenges`, value, config);
			dispatch({ type: ADD_CHALLENGE, payload: data });
			dispatch({
				type: GET_ALL_CHALLENGES,
				payload: [...state.all_challenges, data],
			});
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		} finally {
			setLoading(false);
		}
	};

	const updateChallenge = async (value, id, token) => {
		clearChallenges();
		clearError();
		setLoading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await axios.put(`/api/challenges/${id}`, value, config);
			dispatch({ type: UPDATE_CHALLENGE, payload: data });
			dispatch({
				type: GET_ALL_CHALLENGES,
				payload: state.all_challenges.map((ele) =>
					ele._id === data._id ? data : ele
				),
			});
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		} finally {
			setLoading(false);
		}
	};
	const getChallengeById = async (id, token, loading = true, load = true) => {
		clearChallenges();
		clearError();

		if (load) setLoading(true);
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			if (loading) {
				const { data } = await axios.get(`/api/challenges/${id}`, config);
				dispatch({ type: GET_CHALLENGE, payload: data });
				dispatch({
					type: GET_ALL_CHALLENGES,
					payload: state.all_challenges.map((ele) =>
						ele._id === data._id ? data : ele
					),
				});
			} else {
				dispatch({
					type: GET_ALL_CHALLENGES,
					payload: state.all_challenges.map((ele) =>
						ele._id === id._id ? id : ele
					),
				});
			}
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		} finally {
			setLoading(false);
		}
	};
	const deleteChallenge = async (id, token) => {
		clearError();
		// setLoading(true);
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			await axios.delete(`/api/challenges/${id}`, config);
			filterChallenge(id);
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		} finally {
			// setLoading(false);
		}
	};
	const filterChallenge = (id) => {
		dispatch({
			type: GET_ALL_CHALLENGES,
			payload: state.all_challenges?.filter((ele) => ele._id !== id),
		});
	};
	const clearError = () => {
		dispatch({ type: CLEAR_ERROR });
	};
	const setLoading = (isLoading) => {
		dispatch({ type: SET_LOADING, payload: isLoading });
	};
	const clearChallenges = () => {
		dispatch({ type: CLEAR_CHALLENGES });
	};
	return (
		<ChallengeContext.Provider
			value={{
				error: state.error,
				loading: state.loading,
				challenge: state.challenge,
				all_challenges: state.all_challenges,
				clearError,
				addChallenge,
				getAllChallenges,
				updateChallenge,
				getChallengeById,
				deleteChallenge,
				filterChallenge,
			}}
		>
			{children}
		</ChallengeContext.Provider>
	);
};

export default ChallengeState;
