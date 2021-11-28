import React from 'react';
import { useParams } from 'react-router';

const ProductPage = () => {

	let { name } = useParams();

	return (
		<div className="container">
			<h1>{name}</h1>
			<img src={`${process.env.PUBLIC_URL}/${name.toLowerCase()}.png`} className='product-img' alt={`${name}`}/>
			<p>Price: ?</p>
			<p>Description: ?</p>
		</div>
	);
}

export default ProductPage;