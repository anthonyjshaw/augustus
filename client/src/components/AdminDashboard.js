import React, {useEffect} from 'react';

const AdminDashboard = () => {

	useEffect(() => {
		document.title = 'ABSTRKT | ADMIN DASHBOARD'
	})

	return (
		<div className="container">
			<h1>Dashboard</h1>
			<div id="admin-choices" className="grid">
				<p>
					Add product
				</p>
				<p>Delete product</p>
				<p>Update product</p>
				<p>Check orders</p>

			</div>
		</div>
	)
}

export default AdminDashboard;