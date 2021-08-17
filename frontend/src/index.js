import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
	io,
	SocketContext,
	AuthState,
	CodeState,
	ThemeState,
	ChallengeState,
} from './context';

ReactDOM.render(
	<AuthState>
		<SocketContext.Provider value={io}>
			<CodeState>
				<ChallengeState>
					<ThemeState>
						<App />
					</ThemeState>
				</ChallengeState>
			</CodeState>
		</SocketContext.Provider>
	</AuthState>,
	document.getElementById('root')
);
