import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import glob from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

// https://astro.build/config
export default defineConfig({

	site: 'https://example.com',
	redirects: {
		'/': '/blog',
	},
	prefetch: {
		prefetchAll: true
	},
	integrations: [
		tailwind({ nesting: true }),
		{
			name: 'simple',
			hooks: {
				'astro:config:done': async ({ config }) => {
					const files = await glob('./src/content/**/*.md');
					const searchData = files.map((file) => {
						const content = fs.readFileSync(file, 'utf-8');
						const { data, content: body } = matter(content);
						const pubDate = data.pubDate.toLocaleDateString('zh-cn', {
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						});
						return {
							path: path.relative(process.cwd(), path.basename(file).split('.md')[0]), // 使用 process.cwd() 作为参考路径
							...data, pubDate
						};
					});



					const searchIndexData = JSON.stringify(searchData, null, 2);
					const outputPath = path.join(process.cwd(), 'public/data', 'searchData.json'); // 确保目标文件夹存在

					await fs.ensureDir(path.dirname(outputPath));
					await fs.writeFile(outputPath, searchIndexData);

					return config;
				},
			}
		}
	],


});
