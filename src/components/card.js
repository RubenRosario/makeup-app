import React, { useState } from 'react';
import ColorPalette from './colorPalette';
import StarRatings from 'react-star-ratings';
import Modal from './modal';

import './card.css';

const Card = ({ asset }) => {
	const [showModal, setShowModal] = useState(false);

	const {
		image_link,
		name,
		brand,
		description,
		price,
		product_colors,
		product_link,
		rating,
	} = asset;
	return (
		<>
			{/* modal component */}
			<Modal
				isOpen={showModal}
				onCloseHandler={() => setShowModal(false)}
				clickHandler={() => window.location.assign(product_link)}
				header={`${brand} - ${name}`}>
				<img src={image_link} alt={description} />
			</Modal>
			{/* card container */}
			<div className='card-container' onClick={() => setShowModal(true)}>
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
					<StarRatings
						rating={rating ? rating : 0}
						starRatedColor='rgb(246,187,65)'
						starDimension='25px'
						starSpacing='2px'
					/>
					<span>{rating}</span>
				</div>
				<div className='price'>${price}</div>
			</div>
		</>
	);
};

export default Card;
