import React from 'react';

const Hero = (props) => {
	return (
		<div style={{backgroundImage: `url(${props.image})`}} className="hero">
			<div className="container">
				{props.children}
			</div>
		</div>
	)
};

export default Hero;
