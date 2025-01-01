import { getAllPosts } from '@assets/ts/utils';

export const GET = async () => {

    const blogEntries = await getAllPosts();
    const content = blogEntries.map((entry) => ({
        slug: entry.slug,
        data: {
            ...entry.data,
            pubDate: entry.data.pubDate.toLocaleDateString("zh-cn", {
                year: "numeric",
                month: "2-digit",
                day: "numeric",
            })
        },
    }));
    return new Response(JSON.stringify({ posts: content }));
};