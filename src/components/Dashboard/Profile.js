import React from 'react';
import './Profile.css'

const Profile = () => {
	return (
		<div class="card card-profile">
			<div class="card-cover"></div>
			<div class="card-avatar border-white">
				<a>
					<img src="" alt="profileimg" />
				</a>
			</div>
			<div class="card-body">
				<h4 class="card-title">Ayo Michael</h4>
				<p class="card-description">
				Hey there! Welcome to your user card. As you can see, it is already looking great.
				</p>
				<span class="label label-primary">dele@enterfive.com</span>
				<button type="button" class="btn btn-danger">Log Out</button>
			</div>
		</div>
	);
}

export default Profile;
