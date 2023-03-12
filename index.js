'use strict'
Object.defineProperty(exports, '__esModule', {value: true})

function makeEnum(...values) {
	return Object.fromEntries(values.map(value => [value, value]))
}

exports.default = makeEnum
