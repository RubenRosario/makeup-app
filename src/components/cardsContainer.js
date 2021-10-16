import React from 'react';
import Card from './card';

import './cardsContainer.css';
import LoadingIndicator from './loadingIndicator';

const CardsContainer = ({ currentAssets }) => {
	return (
		<div className='cards-container'>
			{currentAssets.length !== 0 ? (
				currentAssets.map((asset) => <Card asset={asset} />)
			) : (
				<p className='no-item-found'>No item found.</p>
			)}
		</div>
	);
};

export default CardsContainer;
