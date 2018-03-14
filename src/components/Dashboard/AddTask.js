import React, {Component}from 'react';
import './AddTask.css'

class AddTask extends Component {

	

	render() {
		return (
			<div className="card default-bg AddTask">
				<div className="card-body">
					<h4 className="header">Add your task details here</h4>
					<form className="task-form">
						<div className="form-group">
						         <input type="text" className="form-control" placeholder="Project Name" />
						</div>
						<div className="form-group">
							<textarea className="form-control border-input" placeholder="This is a textarea with border. Here can be your nice text" rows="3"></textarea>
						</div>
						<div className="form-group">
							<div className='input-group date' id='datetimepicker'>
								<input type='text' className="form-control datetimepicker" placeholder="Start Date" />
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
