import React, { useState } from "react";
import { connect } from "react-redux";

import { createProject } from "../../store/actions/projectActions";

const CreateProject = ({ createProject }) => {
	const [info, setInfo] = useState({ title: "", content: "" });

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createProject(info);
		console.log(info);
	};

	return (
		<div className='container'>
			<form className='white' onSubmit={handleSubmit}>
				<h5 className='grey-text text-darken-3'>Create new Project</h5>
				<div className='input-field'>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<label htmlFor='content'> ProjectContent</label>
					<textarea
						name=''
						id='content'
						className='materialize-textarea'
						onChange={handleChange}></textarea>
				</div>
				<div className='input-field'>
					<button className='btn pink lighten-1 z-depth-0'>Create</button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project)),
	};
};

export default connect(null, mapDispatchToProps)(CreateProject);
