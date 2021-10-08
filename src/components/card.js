import React from 'react';
import './card.css';

const Card = ({ asset, loading }) => {
	const { image_link, name, description, price, rating } = asset;
	return (
		<div className='card-container'>
			<div className='image-container'>
				<img src={image_link} alt={description} />
			</div>
			<div className='name-price-container'>
				<div className='name'>{name}</div>
				<div className='price'>${price}</div>
			</div>
			<div className='color'>color</div>
			<div className='rating'>{rating}</div>
		</div>
	);
};

export default Card;
