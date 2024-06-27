import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';
import AstroPWA from '@vite-pwa/astro'

const runtimeCaches = (cacheName, handler, urlPattern) => ({

	handler: handler || 'CacheFirst',
	urlPattern: new RegExp(urlPattern),
	options: {
		cacheName,
		expiration: {
			maxEntries: 50,
			maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
		},
		fetchOptions: {
			mode: 'cors',
			credentials: 'omit',
		},
		cacheableResponse: {
			statuses: [0, 200]
		}
	}

});
// https://astro.build/config
export default defineConfig({

	site: 'https://subsequent.pages.dev',
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
				name: '水逺烟微',
				short_name: '水逺烟微',
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
					},
					{
						src: 'maskable-icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					},
				],
			},
			workbox: {
				navigateFallback: null,
				globPatterns: ['**/*.{css,js,html,png,jpg,ico,avif,webp,json,xml}'],
				runtimeCaching: [
					runtimeCaches('all-unpkg', 'CacheFirst', '^https://unpkg\\.com'),
					runtimeCaches('all-jsdelivr', 'CacheFirst', '^https://cdn\\.jsdelivr\\.net'),
					// runtimeCaches('html','StaleWhileRevalidate','*.html')
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
