import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
	return (
		<div className="container">
			<Link to="/admin-products">Products</Link>
			<p>Logout</p>
		</div>
	)	
}

export default AdminNavbar