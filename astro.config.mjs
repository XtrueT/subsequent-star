import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';
import AstroPWA from '@vite-pwa/astro'

const runtimeCaches = (cacheName, urlPattern) => ({

	handler: 'CacheFirst',
	urlPattern,
	options: {
		cacheName,
		expiration: {
			maxEntries: 500,
			maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
		},
		cacheableResponse: {
			statuses: [0, 200]
		}
	}

});
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
		tailwind(),
		AstroPWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Mr.Miao Blog',
				short_name: 'Mr.Miao',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'pwa-64x64.png',
						sizes: '64x64',
						type: 'image/png',
					},
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					}
				],
			},
			workbox: {
				navigateFallback: null,
				globPatterns: ['**/*.{css,js,html,svg,png,ico,webp,jpg,jpeg,json}'],
				runtimeCaching: [
					runtimeCaches('all-js-css-ts', '/(.*?)\.(js|css|ts)/'), 
					runtimeCaches('all-image', '/(.*?)\.(png|jpe?g|svg|webp|gif|bmp|psd|tiff|tga|eps')
				]
			},
			devOptions: {
				enabled: true
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			}
		})
	]
});
