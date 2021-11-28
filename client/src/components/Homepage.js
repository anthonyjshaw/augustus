import React from 'react';
import Hero from './Hero';

const Homepage = (props) => {
	return (
		<>
	
		<div className="container">
			<h2>Merch</h2>
			<div className="merch-grid">
				{props.grid}
			</div>
		</div>
		</>
	);
};

export default Homepage;