import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsContainer from './components/cardsContainer';
import Pagination from './components/pagination';
import Layout from './components/layout';
import { compare, getIndexes, customFilter } from './utils/utils';
import Filters from './components/filters';
import LoadingIndicator from './components/loadingIndicator';

import './App.css';

function App() {
	const [assets, setAssets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [assetsPerPage] = useState(10); // hard code 10 assets per page
	const [filters, setFilters] = useState({});
	const [currentAssets, setCurrentAssets] = useState([]);

	useEffect(() => {
		// get data from api on mount
		(async function fetchAssets() {
			setLoading(true);
			const res = await axios.get(
				'http://makeup-api.herokuapp.com/api/v1/products.json'
			);
			setAssets(
				res.data.sort((obj1, obj2) => compare(obj1, obj2, 'rating', 'desc'))
			);
			setLoading(false);
		})();

		// retrieve the stored state of current page
		const storedCurrentPage = JSON.parse(
			window.localStorage.getItem('currentPage')
		);
		if (storedCurrentPage) {
			setCurrentPage(storedCurrentPage);
		}

		// retrieve the stored filters
		const storedFilters = JSON.parse(window.localStorage.getItem('filters'));
		if (storedFilters) {
			setFilters(storedFilters);
		}
	}, []);

	// store current page whenever it changes
	useEffect(() => {
		window.localStorage.setItem('currentPage', currentPage);
	}, [currentPage]);

	// store filters whenever they change
	useEffect(() => {
		window.localStorage.setItem('filters', JSON.stringify(filters));
	}, [filters]);

	// set current assets whenever assets or filters change
	useEffect(() => {
		setCurrentAssets(assets.filter((asset) => customFilter(asset, filters)));
	}, [assets, filters]);

	// get the index for the first and last assets
	// then set the assets for the current page
	const indexes = getIndexes(currentPage, assetsPerPage);

	// change pages
	const changePage = (number) => setCurrentPage(number);

	// Filter list based on brand, price, and/or productType
	const filtersHandler = (filters) => {
		setFilters(filters);
		setCurrentPage(1);
	};

	return (
		<Layout>
			{loading ? (
				<LoadingIndicator />
			) : (
				<>
					<Filters filterHandler={filtersHandler} />
					<CardsContainer
						currentAssets={currentAssets.slice(indexes[0], indexes[1])}
					/>
					<Pagination
						currentPage={currentPage}
						assetsPerPage={assetsPerPage}
						totalAssets={currentAssets.length}
						paginate={changePage}
					/>
				</>
			)}
		</Layout>
	);
}

export default App;
