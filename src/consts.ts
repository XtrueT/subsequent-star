// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.


// constants.ts
export const config = {
    title: '水逺烟微',
    url: 'https://github.com/XtrueT',
    author: '水逺烟微',
    avatar: '/image/avatar.jpg',
    description: '水逺烟微的博客',
    keyword: '水逺烟微的博客,Astro,JavaScript,HTML,CSS,Tailwincss,Blog',
    paginate: 5,
    paginate_max_links: 3,
    sliceNum: 3,
    nav: [
        { title: '主页', href: '/' },
        { title: '关于', href: '/about' },
        { title: '归档', href: '/archives' },
    ],
    header_images: {
        enable: true,
        src: '/image/header.webp',
        alt: 'header'
    },
    simple_search: {
        enable: true,
        placeholder: '搜索',
        json: `${import.meta.env.PROD ? import.meta.env.SITE : "http://localhost:4321"}/content.json`,
    },
    valine: {
        enable: true,
        src: 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
        appId: 'SrzzGzdqbBXFOBE3ia8dVAnc-gzGzoHsz',
        appKey: '0L9sFb0zNzyK7dRMunmGxbhx',
        avatar: 'identicon',
        placeholder: '在这里评论吧！',
        visitor: true,//# 文章访问量统计
        highlight: true, //# 代码高亮
        avatarForce: false,// # 每次访问强制拉取最新的评论列表头像
        recordIP: true,// # 记录评论者IP
    },
    linked: [
        { title: 'jekyll blog', href: 'https://xtruet.github.io/' }
    ]

}

export const gaodeApi = {
    key: '660177da232d9fee719cdb922e85c6e4',
    weather: 'https://restapi.amap.com/v3/weather/weatherInfo',
    ip: 'https://restapi.amap.com/v3/ip'
}

export const holidays = [
    { name: '中秋节', date: '2024-09-17' },
    { name: '国庆', date: '2024-10-01' },
    { name: '元旦', date: '2025-01-01' },
    { name: '春节', date: '2025-01-29' },
]