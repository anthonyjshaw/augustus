import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router';

const AdminPage = () => {
	const [loginStatus, setLoginStatus] = useState(false);
	const [value, setValue] = useState({username: '', password: ''});
	const username = process.env.REACT_APP_ADMIN_USERNAME;
	const password = process.env.REACT_APP_ADMIN_PASSWORD;

	useEffect(() => {
		document.title = "Augustus | Admin Page"
	})
	function handleChange(e) {
		setValue({...value,
			[e.target.name]: e.target.value
		});
	}
	

	function handleSubmit(e) {
		e.preventDefault();
		alert(JSON.stringify(value));
		console.log(username)
		console.log(password);
		if (value.username === username && value.password === password) {
			setLoginStatus(true);
		} else {
			setLoginStatus(false);
		}
		localStorage.setItem('loginStatus', loginStatus);
	}

	
	return (
		<div className="container">
			<h1>Login</h1>
			<form id="login-form" onSubmit={handleSubmit}>
				<label htmlFor="username">
					Username
				</label>
				<input type="text" name="username" value={value.username} onChange={handleChange}/>
				<label htmlFor="password">
					Password
				</label>
				<input type="password" name="password" value={value.password} onChange={handleChange}/>				
				<input type="submit" name="Login" value="Login" />
			</form>
		</div>
	);
}

export default AdminPage;
