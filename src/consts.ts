// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.


// constants.ts
export const config = {
    title: 'XTRUET',
    url: 'http://xtruet.github.io',
    author: '霁',
    avatar: 'https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/pp.1.cd298366.xLed3zwhuhnRsSFcnjqzJQ.jpg?1567248569',
    header: '/image/header.jpg',
    // header: '/image/bg-1.avif',
    aside: '/image/aside.jpg',
    // bg: '/image/bg.jpg',
    // bg: '/image/bg-1.avif',
    bg: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: '霁的博客 | Mr.Miao 的博客 | XtrueT 的博客',
    keyword: 'XtrueT的博客',
    paginate: 8,
    paginate_max_links: 3,
    sliceNum: 3,
    nav: [
        { title: '主页', href: '/blog' },
        { title: '关于', href: '/about' },
        { title: '归档', href: '/archives' },
    ],
    simple_search: {
        enable: true,
        placeholder: '搜索',
        json: '/data/searchData.json',
    },
    valine: {
        enable: true,
        src: 'https://cdn.jsdelivr.net/npm/valine',
        appId: 'SrzzGzdqbBXFOBE3ia8dVAnc-gzGzoHsz',
        appKey: '0L9sFb0zNzyK7dRMunmGxbhx',
        notify: true, //# 评论回复邮件提醒
        verify: true, //# 验证码服务
        avatar: 'identicon',
        placeholder: '在这里评论吧！',
        visitor: true,//# 文章访问量统计
        highlight: true, //# 代码高亮
        avatarForce: false,// # 每次访问强制拉取最新的评论列表头像
        recordIP: true,// # 记录评论者IP
    }

}