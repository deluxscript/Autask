import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Profile from './Profile';

import './Dashboard.css';

class Dashboard extends  Component {

	constructor() {
		super();
		this.state = {
			Tasks: {}
		}
	}

	  Tasklist = (Task) => {
	    const Tasks = {...this.state.Tasks};
	    //add in our new Task
			const timestamp = Date.now();
			Tasks[`Task-${timestamp}`] = Task;
			//set State
			this.setState({Tasks});

	  };

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

export default Dashboard;
