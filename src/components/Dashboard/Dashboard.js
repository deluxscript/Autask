import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Profile from './Profile';

import './Dashboard.css';

class Dashboard extends  Component {

	componentDidMount() {
		document.body.style.backgroundColor = "#DEE3EB";
	}

	render() {
		return (
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<TaskList />
						</div>
						<div className="col-md-4">
							<AddTask />
						</div>
						<div className="col-md-3">
							<Profile />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboar d;
