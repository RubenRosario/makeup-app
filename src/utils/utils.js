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

export function customFilter() {}
