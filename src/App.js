import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsContainer from './components/cardsContainer';
import Pagination from './components/pagination';
import Layout from './components/layout';
import { compare, getIndexes } from './utils/utils';
import Filters from './components/filters';

import './App.css';

function App() {
	const [assets, setAssets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [assetsPerPage] = useState(10); // hard code 10 assets per page

	useEffect(() => {
		// get data from api on mount
		(async function fetchAssets() {
			setLoading(true);
			const res = await axios.get(
				'http://makeup-api.herokuapp.com/api/v1/products.json'
			);
			const data = res.data;
			data.sort((obj1, obj2) => compare(obj1, obj2, 'rating', 'desc'));
			setAssets(data);
			setLoading(false);
		})();

		// restore the previous state of current page
		const storedCurrentPage = JSON.parse(
			window.localStorage.getItem('currentPage')
		);
		if (storedCurrentPage) {
			setCurrentPage(storedCurrentPage);
		}
	}, []);

	// save current page whenever it changes
	useEffect(() => {
		window.localStorage.setItem('currentPage', currentPage);
	}, [currentPage]);

	// get the index for the fist and last asset
	// then set the assets for the current page
	const indexes = getIndexes(currentPage, assetsPerPage);
	const currentAssets = assets.slice(indexes[0], indexes[1]);

	// change pages
	const changePage = (number) => setCurrentPage(number);

	// Filter list based on brand, price, and/or productType
	const filterHandler = (filters) => {
		// not yet implemented
	};

	return (
		<Layout>
			<Filters filterHandler={filterHandler} />
			<CardsContainer currentAssets={currentAssets} loading={loading} />
			<Pagination
				currentPage={currentPage}
				assetsPerPage={assetsPerPage}
				totalAssets={assets.length}
				paginate={changePage}
			/>
		</Layout>
	);
}

export default App;
