import React, {Component}from 'react';
import './AddTask.css'

class AddTask extends Component {

	constructor() {
		super();
		this.state = {
			projectName: '',
			projectDesc: '',
			assignedDate: '' 
		}
	}

	handleChange = (e) => {
		this.setState({ 
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const form = {
			projectName: this.state.projectName,
			projectDesc: this.state.projectDesc,
			assignedDate: this.state.assignedDate,
		}
		console.log(form);
	}

	render() {
		return (
			<div className="card default-bg AddTask">
				<div className="card-body">
					<h4 className="header">Add your task details here</h4>
					<form className="task-form">
						<div className="form-group">
						         <input type="text" name="projectName" className="form-control" placeholder="Project Name" value={this.state.projectName} onChange={e=> this.handleChange(e)} />
						</div>
						<div className="form-group">
							<textarea className="form-control border-input" name="projectDesc" placeholder="This is a textarea with border. Here can be your nice text" rows="3" value={this.state.projectDesc} onChange={e=> this.handleChange(e)} ></textarea>
						</div>
						<div className="form-group">
							<input type='date' name="assignedDate" className="form-control datetimepicker" placeholder="Start Date" value={this.state.assignedDate} onChange={e => this.handleChange(e)} />
							
						</div>
						<button type="button" onClick={(e) => this.onSubmit(e)} className="btn btn-success btn-sm">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddTask;
