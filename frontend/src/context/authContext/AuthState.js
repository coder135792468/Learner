import { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import { LOGIN, ERROR, CLEAR_ERROR, GET_ALL_USER } from './types';

const AuthState = ({ children }) => {
	const initialState = {
		loading: false,
		login: false,
		user: null,
		error: null,
		users: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	//Login a user
	const loginUser = async (email, password) => {
		clearError();
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const { data } = await axios.post(
				'/api/user/login',
				{ email, password },
				config
			);
			await dispatch({
				type: LOGIN,
				payload: data,
			});
			localStorage.setItem('userInfo', JSON.stringify(data));
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

	//register User
	const registerUser = async (name, email, password) => {
		clearError();
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const { data } = await axios.post(
				'/api/user',
				{ name, email, password },
				config
			);
			await dispatch({
				type: LOGIN,
				payload: data,
			});
			localStorage.setItem('userInfo', JSON.stringify(data));
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

	//get Login User Data
	const getUserData = async () => {
		const userInfoFromStorage = localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: {};
		if (userInfoFromStorage?.name) {
			dispatch({ type: LOGIN, payload: userInfoFromStorage });
		}
	};

	//uupdate user profile Data
	const updateUser = async (user) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${state.user.token}`,
				},
			};
			const { data } = await axios.put('/api/user/profile', user, config);

			await localStorage.setItem('userInfo', JSON.stringify(data));
			dispatch({ type: LOGIN, payload: data });
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

	const getAllUsers = async () => {
		try {
			const { data } = await axios.get('/api/user');

			dispatch({ type: GET_ALL_USER, payload: data });
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

	//clear errors
	const clearError = () => {
		dispatch({ type: CLEAR_ERROR });
	};
	return (
		<AuthContext.Provider
			value={{
				loading: state.loading,
				login: state.login,
				user: state.user,
				users: state.users,
				error: state.error,
				loginUser,
				registerUser,
				getUserData,
				clearError,
				updateUser,
				getAllUsers,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthState;
