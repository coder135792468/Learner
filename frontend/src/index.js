import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthState, CodeState, ThemeState, ChallengeState } from './context';
ReactDOM.render(
	<AuthState>
		<CodeState>
			<ChallengeState>
				<ThemeState>
					<App />
				</ThemeState>
			</ChallengeState>
		</CodeState>
	</AuthState>,
	document.getElementById('root')
);
