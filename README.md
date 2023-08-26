# Drift 

Complete Next.js Developer in 2023
---
Learn Next JS from industry experts using modern best practices. The only Next JS tutorial + projects course you need to learn Next JS, build enterprise-level React applications (like a Netlifx clone!) from scratch and get hired as a Next.js Developer in 2023. Go from Zero To Next.js Mastery.

# 一、介绍(Introduction)

## 001. 介绍

本课程教学内容涵盖了Next.js的基础知识、最新的工具，先进特性和最佳做法。

将学到如下内容:

- 搜索引擎优化(SEO)
- 静态站点生成(Static site generation)
- 服务端渲染(Server side rendering)
- 增量静态再生(Increment static regeneration)
- 水合作用(Hydration)

![学习内容](resources\images\001\01.png)

还将了解到更大的图景: 

- Foursquare API
- Airtable
- Hasura
- Serverless
- 部署和构建优化(Deployment & Build Optimize)
- 认证(Authentication)
- GraphQL

我们将开发以下项目:

- 投资组合
- Netflix

## 002. 课程大纲

本课程涵盖的Next.js路线图如下: 

1. Next.js 基础(Fundamentals) - 将讨论为什么要使用Next.js？有什么用？为什么流行？
2. React - 将讨论为什么选择它而不是使用其他技术创建应用程序？
3. 第一个项目 - 咖啡鉴赏家项目(Coffee Connoisseur)，该项目将教你Next.js的基础知识，一起工作，一起建造一些东西。
4. 超越基础 - Hydration、SEO、在Next.js中的不同渲染技术，静态站点生成、服务器渲染、增量静态生成等。
5. 无服务器功能(Serverless Functions) - 为什么使用它们？
6. Airtable - 一个数据库存储技术。
7. SWR - 由Next.js团队构建的React Hooks库，这是制造快速react组件的一种方式。
8. 大师项目(Master Project) - 一个Netflix网站克隆，包含`CSS Modules`、`Framer Motion`、`Authentication`、`ISR`、`GraphQL`、`Hasura`、`Production + Deployment`、`Performance`等。
9. React Hooks
10. SEO

![课程大纲](resources\images\002\01.png)

# 二、Next.js基础(Next.js Fundamentals)

## 003. Next.js基础章节预览

我们需要了解技术为什么存在？它们试图解决什么问题？即使本课程学习完成之后，也能更好地判断事物，并能够构建好您的应用程序。

- 为什么存在Next.js？
    - React已经被这么多开发人员使用，React在开发人员社区中非常流行。
- Next.js解决什么问题？它是如何使前端开发变得如此容易的？
    - Next.js不仅可以构建应用程序的前端，而且还能够构建服务端代码(后端)。
- 什么时候应该选择Next.js构建项目？什么时候使用React构建项目？

1. 什么是Next.js
2. 使用Next.js有什么好处
3. 为什么Next.js如此受欢迎。

## 004. 什么是Next.js

它是一个构建在React之上的框架，允许您在服务器上呈现内容，从而使您能够灵活地构建可伸缩的应用程序。

Next.js被成为生产级React框架，您可以选择在浏览器的客户端上呈现一个页面，但选择在另一个页面的服务器上执行其他操作，Next.js真的很灵活(flexiable)，这就是为什么能够构建真正可伸缩和高性能的应用程序。

## 005. Next.js的好处是什么

### 概述

Next.js的好处分为以下几点:

- 不同的渲染技术
- 性能
- 基于文件路由
- 搜索引擎优化
- 无服务器功能

![Next.js的好处](resources\images\005\01.png)

### 不同的渲染技术

1. 静态站点生成

如果你有很多营销内容、博客文章，那么您将希望我们使用静态站点生成，它所处理的事情就是将你所有的内容预先构建在服务器上，然后服务器将把这些内容传递给客户端，所有这些内容都是预先构建的并被缓存，所以客户端基本上是一遍又一遍地获取缓存的内容，所以会得到巨大的性能提升。

2. 服务端渲染

我们可以在服务器上生成站点，如果您希望在页面刷新时更新数据(即服务器端呈现)，您正在服务器上呈现内容，但每次刷新页面时将会渲染内容并再次获取数据。

3. 增量站点再生

这是一项两全其美的技术，你将得到静态站点生成并在增量站点生成中使用服务端渲染。

可以提前生成页面，作为构建过程的一部分，但也可以重新获取新数据，就像在服务器端渲染一样。

> 构建领域专业知识体系结构应用程序(Build that domain expertise architecture applications)

![不同的渲染技术](resources\images\005\02.png)