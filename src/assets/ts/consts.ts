// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const THEME_NAME = "theme";
const THEME_TOGGLE_BUT_ID = "theme-toggle";
const CONTENT_NAME = 'blog'; //

export { THEME_NAME, THEME_TOGGLE_BUT_ID, CONTENT_NAME }

// constants.ts
export const config = {
    title: '水逺烟微',
    url: 'https://github.com/XtrueT',
    author: '水逺烟微',
    avatar: '/image/avatar.jpg',
    description: '宁静致远',
    keyword: '水逺烟微的博客,Astro,JavaScript,HTML,CSS,Tailwincss,Blog',
    paginate: 5,
    paginate_max_links: 3,
    sliceNum: 3,
    header_images: {
        enable: false,
        src: '/image/header.webp',
        alt: 'header'
    },
    simple_search: {
        enable: true,
        placeholder: '搜索',
        json: `${import.meta.env.PROD ? import.meta.env.SITE : "http://localhost:4321"}/content.json`,
    },
    giscus: {
        enable: true,
    },
    valine: {
        enable: false,
        src: 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',

    },
}

export const siteLinks = [
    {
        name: '导航菜单',
        links: [
            { title: '主页', href: '/' },
            { title: '关于', href: '/about' },
            { title: '归档', href: '/archives' },
        ]
    },
    {
        name: '友情链接',
        links: [
            { title: 'XTRUET', href: 'https://xtruet.github.io/', target: '_blank' },
        ]
    },
    {
        name: '网站信息',
        links: [
            { title: '隐私协议', href: '/privacy' },
            { title: '网站地图', href: '/sitemap-0.xml', target: '_blank' },
        ]
    }
]

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


export const valineConfig = {
    appId: 'SrzzGzdqbBXFOBE3ia8dVAnc-gzGzoHsz',
    appKey: '0L9sFb0zNzyK7dRMunmGxbhx',
    avatar: 'identicon',
    placeholder: '在这里评论吧！',
    visitor: true,//# 文章访问量统计
    highlight: true, //# 代码高亮
    avatarForce: false,// # 每次访问强制拉取最新的评论列表头像
    recordIP: true,// # 记录评论者IP
}
export const giscusConfig = {
    "src": 'https://giscus.app/client.js',
    "data-repo": 'XtrueT/xtruet',
    "data-repo-id": 'MDEwOlJlcG9zaXRvcnkzNzc1NDE4NzU=',
    "data-category": 'Announcements',
    "data-category-id": 'DIC_kwDOFoDU884ChDTg',
    "data-mapping": 'pathname',
    "data-strict": '0',
    "data-reactions-enabled": '1',
    "data-emit-metadata": '0',
    "data-input-position": 'top',
    //"data-theme": 'preferred_color_scheme', // Dynamically 
    "data-lang": 'zh-CN',
    "data-loading": 'lazy',
    "crossorigin": 'anonymous'
}