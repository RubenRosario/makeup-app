import React from 'react';

import './paginator.css';

const Pagination = ({ assetsPerPage, totalAssets, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalAssets / assetsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='page-numbers-container'>
				Go to page...
				{pageNumbers.map((number) => (
					<li className='page-number' key={number}>
						<a onClick={() => paginate(number)} href='!#'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
