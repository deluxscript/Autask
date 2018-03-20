import React, {Component}  from 'react';
import './TaskList.css'

class TaskList extends Component {
	render() {
		const { eachTask, index } = this.props;
		const Task = eachTask[index];
		console.log('TaskList', Task.projectName);
		return (
			<div className= "row TaskList">
				<div className="col-md-12 col-sm-12">
					<div className="card">
						<div className="card-body">
							<h6 className="card-category">{Task.projectName}</h6>
							<span className="label label-primary">{Task.assignedDate}</span>
							<div id="acordeon">
								<div id="accordion" role="tablist" aria-multiselectable="true">
									<div className="card">
										<div className="card-header card-collapse" role="tab" id="headingOne">
											<h5 className="mb-0 panel-title">
											<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#`${timestamp}`" aria-expanded="false" aria-controls={index}>
											Read full project description
											<i className="ti-angle-down"></i>
											</a>
											</h5>
										</div>
										<div id={index} className="collapse" role="tabpanel" aria-labelledby="headingOne">
											<div className="card-body">{Task.projectDesc}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TaskList;
