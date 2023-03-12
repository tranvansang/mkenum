type IEnumObject<T extends string> = {
	[key in T]: key
}
export default function makeEnum<T extends string>(
	...values: T[]
) {
	return Object.fromEntries(values.map(value => [value, value])) as IEnumObject<T>
}
export type IEnum<T> = T[keyof T]
