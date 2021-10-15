import React from 'react';
import Card from './card';

import './cardsContainer.css';

const CardsContainer = ({ currentAssets, loading }) => {
	if (loading) {
		// to be improved
		return <h1 style={{ height: '100vh' }}> LOADING... Needs improvements</h1>;
	}
	return (
		<div className='cards-container'>
			{currentAssets.length !== 0 ? (
				currentAssets.map((asset) => <Card asset={asset} loading={loading} />)
			) : (
				<p className='no-item-found'>No item found.</p>
			)}
		</div>
	);
};

export default CardsContainer;
