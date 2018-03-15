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

	handleChange = (e) => {
		this.setState( 
			[e.target.name]: e.target.value
		)
	}

	onSubmit = (e) => {
		e.preventDefault();
		const form = {
			projectName: this.state.projectName,
			ProjectDesc: this.state.ProjectDesc,
			assignedDate: this.state.assignedDate,
		}

		console.log(this.state.projectName);
		console.log('PD', form.ProjectDesc);
		console.log('AD', form.assignedDate);
	}

	render() {
		return (
			<div className="card default-bg AddTask">
				<div className="card-body">
					<h4 className="header">Add your task details here</h4>
					<form className="task-form">
						<div className="form-group">
						         <input type="text" name="projectName" className="form-control" placeholder="Project Name" onChange={e=> this.handleChange(e)} />
						</div>
						<div className="form-group">
							<textarea className="form-control border-input" name="ProjectDesc" placeholder="This is a textarea with border. Here can be your nice text" rows="3" onChange={e=> this.handleChange(e)} ></textarea>
						</div>
						<div className="form-group">
							<div className='input-group date' id='datetimepicker'>
								<input type='text' name="assignedDate" className="form-control datetimepicker" placeholder="Start Date" onChange={e => this.handleChange(e)} />
								<span className="input-group-addon">
								<span className="glyphicon glyphicon-calendar"><i className="fa fa-calendar" aria-hidden="true"></i></span>
								</span>
							</div>
						</div>
						<button type="button" onClick={(e) => this.onSubmit(e)} className="btn btn-success btn-sm">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddTask;
