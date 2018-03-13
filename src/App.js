import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path="/register" component={Register} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		);
	}
}

export default App;
