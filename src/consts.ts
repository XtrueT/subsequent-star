// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.


// constants.ts
export const config = {
    title: 'XTRUET',
    url: 'http://xtruet.github.io',
    author: '霁',
    avatar: 'https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/pp.1.cd298366.xLed3zwhuhnRsSFcnjqzJQ.jpg?1567248569',
    header: '/image/header.jpg',
    aside: '/image/aside.jpg',
    description: '霁的博客 | Mr.Miao 的博客 | XtrueT 的博客',
    keyword: 'XtrueT的博客',
    paginate: 10,
    nav: [
        { title: '主页', href: '/blog' },
        { title: '关于', href: '/about' },
        { title: '标签', href: '/tags' },
        { title: '归档', href: '/archive' },
    ],
    simple_search: {
        enable: true,
        placeholder: '搜索',
        json: '/data/searchData.json',
    },
}