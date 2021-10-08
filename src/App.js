import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsContainer from './components/cardsContainer';
import Pagination from './components/pagination';
import Layout from './components/layout';

import './App.css';

function App() {
	const [assets, setAssets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [assetsPerPage] = useState(10);

	// get data from api on mount
	useEffect(() => {
		const fetchAssets = async () => {
			setLoading(true);
			const res = await axios.get(
				'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
			);
			setAssets(res.data);
			setLoading(false);
		};
		fetchAssets();
	}, []);

	// current assets
	const indexOfLastAsset = currentPage * assetsPerPage;
	const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
	const currentAssets = assets.slice(indexOfFirstAsset, indexOfLastAsset);

	// change page
	const changePage = (number) => setCurrentPage(number);

	return (
		<Layout>
			<CardsContainer currentAssets={currentAssets} loading={loading} />
			<Pagination
				assetsPerPage={assetsPerPage}
				totalAssets={assets.length}
				paginate={changePage}
			/>
		</Layout>
	);
}

export default App;
