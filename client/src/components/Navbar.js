import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
	const [query, setQuery] = useState('');
	const [searchResults, setSearchResults] = useState('');

	function handleChange(e) {
		setQuery(e.target.value);
	}
	useEffect(() => {

	});
	return (
		<div className='container'>
			<div className='nav-links'>
					<div><Link to='/'>Home</Link></div>
					{props.links}
					<form>
						{/* <label htmlFor="search">Search</label> */}
						{/* <input type="text" name="search" value={query} onChange={handleChange}/> */}
					</form>
			</div>
		</div>
	);
}

export default Navbar;