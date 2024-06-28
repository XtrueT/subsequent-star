---

title: 从Jekyll迁移到Astro要做什么？
pubDate: 2024-06-10
author: 霁
heroImage: 
slug: '2024-01'
categories:
- JavaScript
tags:
- Astro

---

## 环境配置

环境：Window10、WSL2

dev@ALLENYS:/home/project/subsequent-star$ node -v

v18.20.2

[Astro 文档](https://docs.astro.build/zh-cn/concepts/why-astro/)

## 安装Astro

基于blog 模版进行开发

```sh
npm create astro@latest -- --template blog
```

## 需要实现的内容

大致上分为

 1. 内容迁移布局整理支持暗模式
 2. 归档分页
 3. 标签统计
 4. 简单搜索
 5. 目录生成
 6. Valine评论
 7. 图片懒加载
 8. PWA支持

目前已经基本实现，有一些问题还需要处理。


## 内容迁移
 需要变更 frontmatter

```yml
---
layout: post
title: title
date: 2021-12-10
author: 霁
header-img:
catalog: true
categories:
- categories1
- categories2
tags:
- tag1
- tag2
---
```
更新为如下

```yml
---

title: title
pubDate: 2024-06-10
author: 霁
heroImage: '/image/header.avif'
slug: '2024-01' # 永久链接
categories:
- categories1
- categories2
tags:
- tag1
- tag2

---
```
并将内容集合content的 `config.ts` 进行更新可以参考 
[Zod](https://github.com/colinhacks/Zod)进行配置

```javascript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional().default(''),
		author: z.string().default('miao'),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage:z.string().nullable().optional().default(''),
		tags:z.array(z.string()).optional().default([]),
		categories:z.array(z.string()).optional().default([])
	}),
});

export const collections = { blog };
```
更新完后放到blog文件夹就可以了。