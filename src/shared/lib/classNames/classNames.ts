export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
	mainClass: string,
	mods: Mods = {},
	additional: Array<string | undefined> = [],
): string {
	return [
		mainClass,
		...additional,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
}
