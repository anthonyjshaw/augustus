import React from 'react'

const SortList = (props) => {
	return (
		<div className="container">
			<label htmlFor="products-select">Sort by:</label>
			<select name="products" id="products-selects">
				<option value="">--Please choose an option--</option>
				<option value="price-lowest" onClick={props.onClick}>Price - Lowest to Highest</option>
				<option value="price-highest" onClick={props.onClick}>Price - Highest to Lowest</option>
			</select>
		</div>
	)	
}

export default SortList;