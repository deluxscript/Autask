import React from 'react';
import './AddTask.css'

const AddTask = () => {
	return (
		<div className="card default-bg AddTask">
			<div className="card-body">
				<h4 class="header">Add your task details here</h4>
				<form class="task-form">
					<div class="form-group">
					         <input type="text" class="form-control" placeholder="Project Name" />
					</div>
					<div className="form-group">
						<textarea class="form-control border-input" placeholder="This is a textarea with border. Here can be your nice text" rows="3"></textarea>
					</div>
					<div class="form-group">
						<div class='input-group date' id='datetimepicker'>
							<input type='text' class="form-control datetimepicker" placeholder="Start Date" />
							<span class="input-group-addon">
							<span class="glyphicon glyphicon-calendar"><i class="fa fa-calendar" aria-hidden="true"></i></span>
							</span>
						</div>
					</div>
					<button type="button" class="btn btn-success btn-sm">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default AddTask;
