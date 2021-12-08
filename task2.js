function reverseString(string) {
    let str = string.split('');
    str = str.reverse()
	return str.join('')
}

module.exports = reverseString;