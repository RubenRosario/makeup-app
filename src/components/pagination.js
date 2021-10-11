import React from 'react';

import './paginator.css';

const Pagination = ({ currentPage, assetsPerPage, totalAssets, paginate }) => {
	// create an array with all page numbers.
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(totalAssets / assetsPerPage); i++) {
		pageNumbers.push(i);
	}

	const firstPage = pageNumbers[0];
	const lastPage = pageNumbers[pageNumbers.length - 1];
	const previousPage = currentPage - 1;
	const nextPage = currentPage + 1;

	// filter page numbers to appear in the paginator
	// (first, last, current, next, and previous)
	const showingPageNumbers = pageNumbers.filter(
		(number) =>
			number === firstPage ||
			number === lastPage ||
			number === currentPage ||
			number === nextPage ||
			number === previousPage
	);

	// fill in the gaps between non-adjacent page numbers with '...'
	if (previousPage - firstPage > 1) {
		showingPageNumbers.splice(1, 0, '...');
	}
	if (lastPage - nextPage > 1) {
		showingPageNumbers.splice(showingPageNumbers.length - 1, 0, '...');
	}

	return (
		<nav>
			<ul className='page-numbers-container'>
				{showingPageNumbers.map((number, index) =>
					Number(number) ? (
						<li
							key={index}
							className={`page-number ${currentPage === number && 'current'}`}>
							<a onClick={() => paginate(number)} href='!#'>
								{number}
							</a>
						</li>
					) : (
						<li key={index} className={'ellipsis'}>
							...
						</li>
					)
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
