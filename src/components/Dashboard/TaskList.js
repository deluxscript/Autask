import React, {Component}  from 'react';
import './TaskList.css'

class TaskList extends Component {
	render() {
		const Task = this.props.eachTask;
		console.log('TaskList', Task[index]);
		return (
			<div className= "row TaskList">
				<div className="col-md-12 col-sm-12">
					<div className="card">
						<div className="card-body">
							<h6 className="card-category">Best stories</h6>
							<span className="label label-primary">12/11/2018</span>
							<div id="acordeon">
								<div id="accordion" role="tablist" aria-multiselectable="true">
									<div className="card">
										<div className="card-header card-collapse" role="tab" id="headingOne">
											<h5 className="mb-0 panel-title">
											<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
											Read full project description
											<i className="ti-angle-down"></i>
											</a>
											</h5>
										</div>
										<div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
											<div className="card-body">
											Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
											</div>
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
