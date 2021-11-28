import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarContainer = () => {
	const links = ['Login'];
	const mappedLinks = links.map(e => <div className="nav-link" key={links.indexOf(e) + 1}><Link to={`/${e.toLowerCase()}`}>{e}</Link></div>)	
	
	if (location.pathname === 'admin' || location.pathname === 'admin-dashboard') {
		return <p></p>
	} else {
		return (
			<Navbar links={mappedLinks}/>
		);
	}
}

export default NavbarContainer;
