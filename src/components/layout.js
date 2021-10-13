import React from 'react';

import './layout.css';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<header>
				<span className='app-title'>Makeup Store</span>{' '}
			</header>
			{children}
			<footer>© 2021 Ruben Rosario</footer>
		</div>
	);
};

export default Layout;
