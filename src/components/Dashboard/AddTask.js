import React, {Component}from 'react';
import './AddTask.css'

class AddTask extends Component {

	constructor() {
		super();
		this.state = {
			projectName: '',
			ProjectDesc: ',',
			assignedDate: ''
		}
	}

	handleChange (event) {
		this.setState( 
			[event.target.name]: event.target.value
		)
	}

	createTask = () => {
		const Task = {
			projectName: this.name.value,
			ProjectDesc: this.desc.value,
			sDate: this.startDate.value,
			eDate: this.endDate.value,
			level: this.level.value,
		}

		console.log(Task);
	}

	render() {
		return (
			<div className="card default-bg AddTask">
				<div className="card-body">
					<h4 className="header">Add your task details here</h4>
					<form className="task-form">
						<div className="form-group">
						         <input type="text" name="projectName" className="form-control" placeholder="Project Name" onChange={ event => this.handleChange} />
						</div>
						<div className="form-group">
							<textarea className="form-control border-input" name="ProjectDesc" placeholder="This is a textarea with border. Here can be your nice text" rows="3" onChange={ event => this.handleChange} ></textarea>
						</div>
						<div className="form-group">
							<div className='input-group date' id='datetimepicker'>
								<input type='text' name="assignedDate" className="form-control datetimepicker" placeholder="Start Date" onChange={ event => this.handleChange} />
								<span className="input-group-addon">
								<span className="glyphicon glyphicon-calendar"><i className="fa fa-calendar" aria-hidden="true"></i></span>
								</span>
							</div>
						</div>
						<button type="button" className="btn btn-success btn-sm">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddTask;
