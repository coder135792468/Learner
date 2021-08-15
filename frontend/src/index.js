import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dotenv from 'dotenv';
import { AuthState, CodeState } from './context';
dotenv.config();
ReactDOM.render(
	<AuthState>
		<CodeState>
			<App />
		</CodeState>
	</AuthState>,
	document.getElementById('root')
);
