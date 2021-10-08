import React from 'react';
import Card from './card';

import './cardsContainer.css';

const CardsContainer = ({ currentAssets, loading }) => {
	if (loading) {
		return <h1> LOADING ...</h1>;
	}
	return (
		<div className='cards-container'>
			{currentAssets.map((asset) => (
				<Card asset={asset} loading={loading} />
			))}
		</div>
	);
};

export default CardsContainer;
