import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
	return (
		<Link to={`/shop/${props.name}`} className='product-card-link'>
			<div className={props.className}>
				<img src={props.image} alt={props.name}/>
				<p>{props.name}</p>
				<p>{props.price}</p>
			</div>
		</Link>
	)
}

export default ProductCard;