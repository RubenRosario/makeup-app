/*
    compare obj1 to obj2 based on key. 
	default order is asc.
*/
export function compare(obj1, obj2, key, order = 'asc') {
	if (!obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key)) {
		return 0;
	}

	let comparison = 0;
	if (obj1[key] > obj2[key]) {
		comparison = 1;
	} else if (obj1[key] < obj2[key]) {
		comparison = -1;
	}
	return order === 'desc' ? comparison * -1 : comparison;
}

/** receive the current page and the number fof assets per page
 * return array with the index of the first and last assets
 */
export function getIndexes(currentPage, assetsPerPage) {
	// index for the first and last assets of the current page
	const indexOfLastAsset = currentPage * assetsPerPage;
	const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
	return [indexOfFirstAsset, indexOfLastAsset];
}

/**
 * Returns true if obj matches the criteria defined by filters. Otherwise false.
 */
export function customFilter(obj, filters) {
	return (
		filterByBrand(obj, filters.brand) &&
		filterByMinPrice(obj, filters.minPrice) &&
		filterByMaxPrice(obj, filters.maxPrice) &&
		filterByProductType(obj, filters.productType)
	);
}

/**
 * returns true is obj's brand equals brand or if no brand is provided
 */
function filterByBrand(obj, brand) {
	return brand ? obj.brand === brand : true;
}

/**
 * returns true is obj's price >= min or if no min price is provided
 */
function filterByMinPrice(obj, min) {
	return min ? Number(obj.price) >= Number(min) : true;
}

/**
 * returns true is obj's price >= max or if no max price is provided
 */
function filterByMaxPrice(obj, max) {
	return max ? Number(obj.price) <= Number(max) : true;
}

/**
 * returns true is obj's product_type equals productType or if no productType is provided
 */
function filterByProductType(obj, productType) {
	return productType ? obj.product_type === productType : true;
}
