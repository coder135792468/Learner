import { useReducer } from 'react';
import CodeContext from './CodeContext';
import CodeReducer from './CodeReducer';
import {
	GET_CODE,
	ERROR,
	CLEAR_ERROR,
	GET_CODE_BY_ID,
	CLEAR_CODE_BY_ID,
	SEARCH_CODE,
	CLEAR_SARCH,
} from './types';
import axios from 'axios';

const CodeState = ({ children }) => {
	const initialState = {
		codes: null,
		current_code: null,
		error: null,
		filter: null,
	};

	const [state, dispatch] = useReducer(CodeReducer, initialState);

	//get all codes
	const getAllCodes = async () => {
		clearError();
		try {
			const { data } = await axios.get('/api/code');
			dispatch({ type: GET_CODE, payload: data });
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

	//get code by ids
	const getCodeByID = async (id) => {
		dispatch({ type: CLEAR_CODE_BY_ID });
		clearError();

		try {
			const { data } = await axios.get(`/api/code/${id}`);
			dispatch({ type: GET_CODE_BY_ID, payload: data });
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

	const updateCode = async (token, code, id) => {
		clearError();
		dispatch({ type: CLEAR_CODE_BY_ID });

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await axios.put(`/api/code/${id}`, code, config);
			dispatch({ type: GET_CODE_BY_ID, payload: data });
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

	//add a code
	const addCode = async (token, code) => {
		clearError();
		dispatch({ type: CLEAR_CODE_BY_ID });
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await axios.post('/api/code', code, config);
			dispatch({ type: GET_CODE_BY_ID, payload: data });
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

	//like code
	const likeCode = async (code, token) => {
		try {
			const config = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			// await axios.put(`/api/code/${code}/like`, config);
			await fetch(`/api/code/${code}/like`, config);
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

	//add comment

	const addComment = async (code, token, text) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};
			// await axios.put(`/api/code/${code}/like`, config);
			await axios.put(`/api/code/${code}/comment`, { text }, config);
		} catch (error) {
			dispatch({
				type: ERROR,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

	//search code for
	const searchCode = (text) => {
		clearSearch();
		dispatch({ type: SEARCH_CODE, payload: text });
	};

	const clearError = () => {
		dispatch({
			type: CLEAR_ERROR,
		});
		dispatch({ type: CLEAR_CODE_BY_ID });
	};
	const clearSearch = () => {
		dispatch({ type: CLEAR_SARCH });
	};
	return (
		<CodeContext.Provider
			value={{
				codes: state.codes,
				current_code: state.current_code,
				error: state.error,
				filter: state.filter,
				getAllCodes,
				clearError,
				getCodeByID,
				updateCode,
				addCode,
				searchCode,
				clearSearch,
				likeCode,
				addComment,
			}}
		>
			{children}
		</CodeContext.Provider>
	);
};

export default CodeState;
