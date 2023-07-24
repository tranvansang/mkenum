type IEnumObject<T extends string> = {
	[key in T]: key
};
export default function makeEnum<T extends string>(...values: T[]): IEnumObject<T>
export type IEnum<T> = T[keyof T]
export {}
