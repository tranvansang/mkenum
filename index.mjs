export default function makeEnum(...values) {
	return Object.fromEntries(values.map(value => [value, value]))
}
