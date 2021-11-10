export function prepareParams(params: any) {
	const obj: { [key: string]: any } = {};
	if (
		typeof params === 'object' &&
		!Array.isArray(params) &&
		params !== null
	) {
		for (const key in params) {
			if (Object.hasOwnProperty.call(params, key)) {
				if (
					typeof params[key] === 'string' &&
					params[key].length === 0
				) {
					continue;
				}
				obj[key] = params[key as string];
			}
		}
		return obj;
	} else {
		return params;
	}
}
