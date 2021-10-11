import React from 'react';
import ColorPalette from './colorPalette';
import ReactStars from 'react-rating-stars-component';

import './card.css';

const Card = ({ asset, loading }) => {
	const {
		image_link,
		name,
		brand,
		description,
		price,
		product_colors,
		rating,
	} = asset;
	return (
		<div className='card-container'>
			<div className='image-container'>
				<img src={image_link} alt={description} />
			</div>
			<div className='brand'>{brand}</div>
			<div className='name'>{name}</div>
			{product_colors ? (
				<ColorPalette colorArray={product_colors} />
			) : (
				<div></div>
			)}
			<div className='rating'>
				<ReactStars
					count={5}
					edit={false}
					value={rating ? rating : 0}
					color={'#bfbaba'}
					size={24}
					activeColor='#ffd700'
				/>
			</div>
			<div className='price'>${price}</div>
		</div>
	);
};

export default Card;
