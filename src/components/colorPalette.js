import React from 'react';

import './colorPalette.css';

const ColorPalette = ({ colorArray }) => {
	//Show maximum six colors
	const showingColors = colorArray.slice(0, 6);
	return (
		<div className='palette-container'>
			{showingColors.map((color, index) => (
				<div
					id={index}
					className='color-item'
					style={{ backgroundColor: color.hex_value }}></div>
			))}
			{colorArray.length - 6 > 0 && (
				<div className='more-colors-item'>{`${
					colorArray.length - 6
				} more color(s) available`}</div>
			)}
		</div>
	);
};

export default ColorPalette;
