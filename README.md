## 基于 Astro 的个人静态生成网页

![](./public/image/header.webp)

### 致谢

感谢以下

```bash
    "@astrojs/rss": "^4.0.6",
    "@astrojs/sitemap": "^3.1.5",
    "@astrojs/tailwind": "^5.1.0",
    "@tailwindcss/typography": "^0.5.13",
    "@vite-pwa/astro": "^0.4.0",
    "astro": "^4.8.5",
    "chart.js": "^4.4.3",
    "tailwindcss": "^3.4.3"
```

### 已添加

- [ ] 界面
- [x] 分页
- [x] 添加标签页、选择标签筛选功能
- [x] 归档时间线
- [x] 加入评论系统，暂时考虑用 valine+leancloud 实现,更新 [gitalk](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)
- [x] 简单的搜索，根据标题，描述，时间，标签等
- [x] 目录
- [x] 响应式页面
- [x] RSS & Sitemap
- [x] PWA
- [x] SEO-friendly with canonical URLs and OpenGraph data
- [x] 100/100 Lighthouse performance

### 欢迎 Satar

```bash
gh repo clone XtrueT/subsequent-star
```

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
