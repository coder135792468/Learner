import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	HomeScreen,
	SettingScreen,
	CodePlayGround,
	QuizScreen,
	QuizPlayScreen,
	CourseScreen,
	CoursePage,
	AddScreen,
	ProfileScreen,
	CodeCoachScreen,
	DeployScreen,
} from './screen';
import { Login, Register } from './auth';
import { CodeCoach } from './components';
import DarkTheme from './Theme/theme';
import { ToastProvider } from 'react-toast-notifications';
const App = () => {
	return (
		<ToastProvider
			autoDismiss={true}
			placement='bottom-center'
			autoDismissTimeout={2000}
		>
			<DarkTheme>
				<Router>
					<Switch>
						<Route exact path='/quiz/:id' component={QuizPlayScreen} />
						<Route exact path='/quiz' component={QuizScreen} />
						<Route exact path='/course/:id' component={CoursePage} />
						<Route exact path='/challenges/:id' component={CodeCoach} />
						<Route exact path='/challenges' component={CodeCoachScreen} />
						<Route exact path='/course' component={CourseScreen} />
						<Route exact path='/setting' component={SettingScreen} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/add' component={AddScreen} />
						<Route exact path='/profile' component={ProfileScreen} />
						<Route exact path='/deploy/:id' component={DeployScreen} />
						<Route exact path='/code/:id' component={CodePlayGround} />
						<Route exact path='/' component={HomeScreen} />
					</Switch>
				</Router>
			</DarkTheme>
		</ToastProvider>
	);
};

export default App;
