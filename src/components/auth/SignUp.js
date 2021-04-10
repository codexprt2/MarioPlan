import React, { useState } from "react";

const SignUp = () => {
	const [info, setInfo] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	});
	const { email, password, firstName, lastName } = info;

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(info);
	};
	return (
		<div className='container'>
			<form className='white' onSubmit={handleSubmit}>
				<h5 className='grey-text text-darken-3'>Sign Up</h5>
				<div className='input-field'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<label htmlFor='firstName'>First Name</label>
					<input type='text' id='firstName' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
