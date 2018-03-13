import React from 'react';
import './Home.css';
import task from './task.png';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="wrapper">
			<div className="page-header section-dark default-bg">
				<div className="w-50 text-center">
					<img src={task} width="320px" alt="App_Image"/>
				</div>
				<div className="w-50">
					<h1 className="Appheader">We can change the world together: one project at a time.</h1>
					<button type="button" className="btn btn-info btn-round"><Link to="/register" className="btn btn-info btn-round">START HERE</Link></button>
				</div>
			</div>
			
		</div>
	);
}

export default Home;
