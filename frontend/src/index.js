import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthState, CodeState, ThemeState } from './context';
ReactDOM.render(
	<AuthState>
		<CodeState>
			<ThemeState>
				<App />
			</ThemeState>
		</CodeState>
	</AuthState>,
	document.getElementById('root')
);
