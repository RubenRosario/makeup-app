import React, { useState } from 'react';

import './filters.css';

const Filters = ({ filterHandler }) => {
	const [inputs, setInputs] = useState({
		brand: '',
		minPrice: '',
		maxPrice: '',
		productType: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};
	return (
		<form>
			<div className='filters-container'>
				<input
					type='text'
					name='brand'
					className='brand-filter'
					placeholder='Brand Name'
					value={inputs.brand}
					onChange={handleInputChange}
				/>
				<div className='price-limits-container'>
					<input
						type='number'
						name='minPrice'
						className='lowest-price-limit'
						placeholder='Min Price'
						value={inputs.minPrice}
						onChange={handleInputChange}
					/>
					<input
						type='number'
						name='maxPrice'
						className='highest-price-limit'
						placeholder='Max Price'
						value={inputs.maxPrice}
						onChange={handleInputChange}
					/>
				</div>
				<input
					type='text'
					name='productType'
					className='product-type-filter'
					placeholder='Prod. Type'
					value={inputs.productType}
					onChange={handleInputChange}
				/>
				<button type='button' onClick={() => filterHandler(inputs)}>
					Apply Filter
				</button>
				<button
					type='button'
					className='button-inverse'
					onClick={() => {
						filterHandler({});
						setInputs({
							brand: '',
							minPrice: '',
							maxPrice: '',
							productType: '',
						});
					}}>
					Clear Filter
				</button>
			</div>
		</form>
	);
};

export default Filters;
