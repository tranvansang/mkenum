'use strict'
module.exports = function makeEnum(...values) {
	return Object.fromEntries(values.map(value => [value, value]))
}
