import React from 'react'
import Homepage from './Homepage';
import ProductCard from './ProductCard';
import SortList from './SortList';
import { useState } from 'react';
import Hero from './Hero';

const HomepageContainer = () => {

	
	let grid = [ 
		{ name: 'Sweatshirt', price: '£19.99', type: 'hoodies-and-sweatshirts', image: '/sweatshirt.png' }, 
		{ name: 'T-shirt', price: '£14.99', type: 't-shirts', image: '/t-shirt.png' }, 
		{ name: 'print', price: "£10.00" },
	];
	const [merchGrid, setMerchGrid] = useState(grid);

	const sortProducts = (e) => {
		console.log(e.target.value);
		if (e.target.value === 'price-lowest') {
			grid = grid.sort((a, b) => parseInt(a.price.replace(/£/g, '')) - parseInt(b.price.replace(/£/g, '')))
		} else if (e.target.value === 'price-highest') {
			grid = grid.sort ((a, b) => parseInt(b.price.replace(/£/g, '')) - parseInt(a.price.replace(/£/g, '')))
		}
		return setMerchGrid(grid);
	}

	const mappedGrid = merchGrid.map((e) => {
		return <ProductCard key={e.name} name={e.name} price={e.price} className='product-card' type={e.type} image={e.image}/>
	});

	return (
		<>
		<Hero image="/banner.png"/>
		<SortList onClick={sortProducts}/>
		<Homepage grid={mappedGrid}/>
		</>
	);
}

export default HomepageContainer;