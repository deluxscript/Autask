import React from 'react';
import './Home.css';
import task from './task.png';
import Register from './../Register/Register';

const Home = () => {
	return (
		<div>
			<div className="page-header section-dark default-bg">
				<div className="w-50 text-center">
					<img src={task} width="320px" alt="App_Image"/>
				</div>
				<div className="w-50">
					<h1 className="Appheader">We can change the world together: one project at a time.</h1>
					<button type="button" className="btn btn-info btn-round">START HERE</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
