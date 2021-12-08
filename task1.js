// Task 1

function stringLength(string) {
	if (string.length > 0 && string.length < 11) {
		return string.length;
	}
	const error = new Error('String should be at least 1 character long and not longer than 10 characters');
	throw error;

}

module.exports = stringLength;