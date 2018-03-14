import React from 'react';
import './Profile.css'

const Profile = () => {
	return (
		<div className="card card-profile">
			<div className="card-cover"></div>
			<div className="card-avatar border-white">
				<a>
					<img src="" alt="profileimg" />
				</a>
			</div>
			<div className="card-body">
				<h4 className="card-title">Ayo Michael</h4>
				<p className="card-description">
				Hey there! Welcome to your user card. As you can see, it is already looking great.
				</p>
				<span className="label label-primary">dele@enterfive.com</span>
				<button type="button" className="btn btn-danger">Log Out</button>
			</div>
		</div>
	);
}

export default Profile;
