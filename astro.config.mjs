import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { visit } from 'unist-util-visit'


// https://astro.build/config
export default defineConfig({

	site: 'https://subsequent-star.vercel.app',
	prefetch: {
		prefetchAll: true
	},
	markdown: {
		rehypePlugins: [() => {
			return function (tree) {
				visit(tree, function (node) {
					if (node.tagName === 'img') {
						node.properties['data-src'] = node.properties.src
						// node.properties.src = '/spinner.gif'
						node.properties['data-alt'] = node.properties.alt
						node.properties['loading'] = 'lazy' //loading="lazy"
						// node.properties.alt = 'default'
					}
				})
			}
		}],
	},
	integrations: [
		sitemap(),
		tailwind({ nesting: true }),
	],
});
