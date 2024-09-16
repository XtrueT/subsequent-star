---
title: Tailwind配置prettier格式化对应的css
slug: '2024-09-16-1'
pubDate: 2024-09-15
author: 霁
heroImage: 'https://uapis.cn/api/imgapi/acg/pc.php'
description: ''
categories:
  - Config
tags:
  - Astro
  - prettier
  - tailwind
---

## 为project配置统一的格式化

根目录创建对应.prettierrc文件

主要是指定单引号，以及html换行`>`的处理，同时格式化排序对应的tailwind css

```
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "ignore",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "auto",
  "singleAttributePerLine": false,
  "jsxSingleQuote": true,
  "jsxBracketSameLine": true,
  "plugins": [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro"
  ]
}
```

### 安装"plugins"

- "prettier-plugin-tailwindcss"
- "prettier-plugin-astro"

```
npm install -D prettier prettier-plugin-tailwindcss prettier-plugin-astro
```

安装完毕后需要在.prettierrc 配置对应的插件

```
  "plugins": [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro"
  ]

```

### 使用

都配置安装好后，可以使用以下命令行格式化文件

```
npx prettier --write "src/**/*.astro"

```

示例：

```
dev@ALLENYS:/home/project/subsequent-star$ npx prettier --write "src/**/*.astro"
[warn] jsxBracketSameLine is deprecated.
src/components/external/BaiduAnalysis.astro 577ms (unchanged)
src/components/external/ChartState.astro 67ms (unchanged)
src/components/external/GaodeInfo.astro 43ms (unchanged)
src/components/external/GiscusComm.astro 13ms (unchanged)
src/components/external/PWA.astro 22ms (unchanged)
src/components/external/TimeInfo.astro 19ms (unchanged)
src/components/external/ValineComm.astro 16ms (unchanged)
src/components/star/ActiveLink.astro 15ms (unchanged)
src/components/star/Card.astro 31ms (unchanged)
src/components/star/CardHeader.astro 32ms (unchanged)
src/components/star/Footer.astro 41ms (unchanged)
src/components/star/FormattedDate.astro 9ms (unchanged)
src/components/star/Head.astro 39ms (unchanged)
src/components/star/LatestPosts.astro 13ms (unchanged)
src/components/star/Navbar.astro 21ms (unchanged)
src/components/star/Pagination.astro 39ms (unchanged)
src/components/star/PaginationLink.astro 20ms (unchanged)
src/components/star/PostItem.astro 29ms (unchanged)
src/components/star/PostsTimeLine.astro 26ms (unchanged)
src/components/star/Prose.astro 1ms (unchanged)
src/components/star/Search.astro 27ms (unchanged)
src/components/star/SectionItem.astro 11ms (unchanged)
src/components/star/SliceList.astro 26ms (unchanged)
src/components/star/StateItem.astro 7ms (unchanged)
src/components/star/TagCloud.astro 14ms (unchanged)
src/components/star/ThemeToggle.astro 16ms (unchanged)
src/components/star/Tocbar.astro 35ms (unchanged)
src/components/star/TocLink.astro 13ms (unchanged)
src/components/star/Togglebar.astro 14ms (unchanged)
src/components/star/ToggleBtn.astro 11ms (unchanged)
src/layouts/DefaultLayout.astro 16ms (unchanged)
src/layouts/PostLayout.astro 58ms (unchanged)
src/pages/about.astro 9ms (unchanged)
src/pages/archives/[...page].astro 17ms (unchanged)
src/pages/blog/[...slug].astro 12ms (unchanged)
src/pages/index.astro 8ms (unchanged)
src/pages/privacy.astro 6ms (unchanged)
src/pages/tags/[tag]/[...page].astro 20ms (unchanged)
dev@ALLENYS:/home/project/subsequent-star$
```
