import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthState, CodeState } from './context';
ReactDOM.render(
	<AuthState>
		<CodeState>
			<App />
		</CodeState>
	</AuthState>,
	document.getElementById('root')
);
