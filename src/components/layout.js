import React from 'react';

import './layout.css';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<header>Makeup Store</header>
			{children}
			<footer>© 2021 Ruben Rosario</footer>
		</div>
	);
};

export default Layout;
