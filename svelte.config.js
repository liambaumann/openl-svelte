import adapter from '@sveltejs/adapter-auto';
import preprocessor from "svelte-preprocess";
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
                    // these are the aliases and paths to them
					'@components': path.resolve('./src/components'),
					'@lib': path.resolve('./src/lib')
				}
			}
		}
	}
};

export default config;
