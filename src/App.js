import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Register from './components/Register/Register';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {

	constructor() {
		super();
		this.state = {
			route: ''
		}
	}

	onRouteChange = () => {
		this.setState({route: Register});
	};
	render() {
		return (
			<div>
				<Nav />
				<Home />
			</div>
		);
	}
}

export default App;
