import rss from '@astrojs/rss';
import { config } from '@assets/ts/consts';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: config.title,
        description: config.description,
        site: context.site,
        items: blog.map((post) => ({
            ...post.data,
            // 从 `slug` 属性计算出 RSS 链接
            // 这个例子假设所有的文章都被渲染为 `/blog/[slug]` 路由
            link: `/blog/${post.slug}/`,
        })),
    });
}