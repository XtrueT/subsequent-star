import { getCollection } from 'astro:content';

export const GET = async () => {

    const blogEntries = (await getCollection("blog")).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
    const content = blogEntries.map((entry) => ({
        slug: entry.slug,
        data: {
            ...entry.data,
            pubDate: entry.data.pubDate.toLocaleDateString("zh-cn", {
                year: "numeric",
                month: "short",
                day: "numeric",
            })
        },
    }));
    return new Response(JSON.stringify({ posts: content }));
};