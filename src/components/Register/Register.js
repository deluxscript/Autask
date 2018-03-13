import React, { Component } from 'react';
import './Register.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeDxState: false,
			inactiveSxState: false,
			activeSxState: false,
			inactiveDxState: false
		};
	}

	componentDidMount() {
		document.body.style.backgroundColor = "#494DA1";
	}

	onClickLogin = () => {

		this.setState({
			activeDxState: true,
			inactiveSxState: true,
			activeSxState: false,
			inactiveDxState: false
		});
	};

	onClickBack = () => {

		this.setState({
			activeSxState: true,
			inactiveDxState: true,
			activeDxState: false,
			inactiveSxState: false,
		});
	};

	render() {
		return (
			<div>
				<div className="regContainer">
					<form className={classNames("signUp, card", {"inactive-dx":this.state.inactiveSxState}, {"active-sx":this.state.activeSxState})}>
						<h4>Create Your Account</h4>
						<input className="w100" type="email" placeholder="Email Address" autoComplete='off' />
						<input type="password" placeholder="Password" />
						<input type="password" placeholder="Verify Password" />
						<button className="form-btn sx log-in" type="button" onClick = {this.onClickLogin}>Log In</button>
						<button className="form-btn dx" type="submit">Sign Up</button>
					</form>
					<form className={classNames("signIn, card", {"active-dx":this.state.activeDxState}, {"inactive-dx":this.state.inactiveDxState},)}>
						<h4>Welcome Back!</h4>
						<button className="fb" type="button">Log In With Facebook</button>
						<p>- or -</p>
						<input type="email" placeholder="Insert eMail" autoComplete='off' />
						<input type="password" placeholder="Insert Password" />
						<button className="form-btn sx back" type="button" onClick = {this.onClickBack}>Back</button>
						<button className="form-btn dx" type="submit"><Link to ="/Dashboard" className="form-btn dx" >Log In</Link></button>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
