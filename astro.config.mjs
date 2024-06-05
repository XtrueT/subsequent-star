import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';
import AstroPWA from '@vite-pwa/astro'

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
		AstroPWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico'],
			manifest: {
				name: 'Mr.Miao Blog',
				short_name: 'Mr.Miao',
				theme_color: '#ffffff',
				icons: [
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
					  src: 'pwa-512x512.png',
					  sizes: '512x512',
					  type: 'image/png',
					  purpose: 'any maskable',
					},
				  ],
			},
			workbox: {
				navigateFallback: '/',
				globPatterns: ['**/*.{css,js,html,svg,png,ico,webp,json,txt}'],
				runtimeCaching: [{
					handler: 'CacheFirst',
					urlPattern: 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
					options: {
						cacheName: 'valine',
						// 这是必须的
						cacheableResponse: {
							statuses: [0, 200]
						}
					}
				}]
			},
			devOptions: {
				enabled: true,
				navigateFallbackAllowlist: [/^\//],
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			}
		})
	]
});
