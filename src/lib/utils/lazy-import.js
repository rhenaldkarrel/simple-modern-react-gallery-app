import * as React from 'react';

export default function lazyImport(factory, name) {
	return Object.create({
		[name]: React.lazy(() =>
			factory().then((module) => ({ default: module[name] }))
		),
	});
}
