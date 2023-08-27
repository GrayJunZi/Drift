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

## 006. 性能

构建高性能应用程序是非常困难的，Next.js处理了很多复杂的事情，所以不必太担心性能问题，有一些助于提高性能的特性是开箱即用的(out of the box)。

以下是Next.js提供的一些有助于提高性能的特性:

- 代码拆分(Code Splitting) - 将您的web应用分成小块(small chunk)，这样您就只能加载当前页面使用的块。
- 缩小文件(Minifying files) 
- 图片优化(Image Optimization)
- 预请求资源(Per-fetching assets)

![性能](resources\images\006\01.png)

## 007. 图像组件

Next.js 的图像组件会根据不同视口的分辨率而加载对应大小的图片。

## 008. 基于文件的路由与SEO

### 基于文件的路由

Next.js有自己的基于文件的路由系统，支持根据特定目录生成的路由，也支持动态路由。

使用Next.js的路由系统的另一个好处是它有助于提高性能，因为Next.js只会状态这个路由和这个路由所需的资源，如果在路由之前共享一堆代码，Next.js也会把它抽象成我们已经看到的块。

- pages - 该文件夹是Next.js基于文件的路由系统的特定目录，会根据该目录生成路由。
    - api - 该文件夹包含所有服务端代码。

![基于文件的路由](resources\images\008\01.png)

### SEO

SEO是搜索引擎优化(Search Engine Optimization)的缩写，本质上是爬虫机器人的一种语言，如果将web应用程序配置为具有特定属性，例如标题、元数据 它将成为web应用程序与爬虫机器人通信的语言，这样就可以让爬虫机器人更容易发现你的内容。

1. web应用程序部署。
2. 爬虫机器人爬取网页内容。
3. 尝试理解网页内容: 确保有标题、描述、正确的html语义。
4. 对页面进行排名。
5. 显示页面到搜索引擎中。

![SEO](resources\images\008\02.png)

## 009. 无服务器功能

使用服务器功能可以在相同的代码库中运行Node.js代码，它都位于Pages目录中，现在API文件夹中的任何内容都会自动匹配路由因为已经配置了Node.js服务，我们可以在不进行任何配置的情况下完成这些功能。

![无服务器功能](resources\images\009\01.png)

## 010. Next.js为什么流行

Next.js有非常强大的开发人员社区，可以处理很多复杂的事情。而使用React创建应用程序时，需要添加许多不同的包，掌握大量不同领域的知识，比如性能、SEO，而且需要学习很多配置，而在Next.js这些事情将由它处理，我们只关心我们需要做的东西就可以。

# 三、构建第一个Next.js应用 | Coffee Connoisseur

## 011. 项目预览

我们将开发以一个名为咖啡鉴赏家的应用程序，该项目会涵盖所有的基础知识。

![Coffee Connoisseur](resources\images\011\01.png)

商店列表

![商店列表](resources\images\011\02.png)

商店详情

![商店详情](resources\images\011\03.png)

## 012. 创建Next.js项目

`create-next-app` 是一个简单的cli工具，能够快速开始构建新的Next.js应用程序。

使用以下命令创建新项目:

```bash
npx create-next-app
```

或使用 yarn

```bash
yarn create next-app
```

进入 `discoveer-coffee-stores` 文件夹使用以下命令运行项目:

```bash
npm run dev
```

## 013. 如何升级Next.js版本

运行以下命令进行升级React包:

```bash
npm install react@latest react-dom@latest
```

或使用 yarn

```bash
yarn add react@latest react-dom@latest
```

运行以下命令进行升级Next.js包:

```bash
npm install next@latest
```

或使用 yarn

```bash
yarn add next@latest
```

## 014. 升级Next.js版本到12

> 因本身使用最新版本将跳过该命令

指定Next.js版本为12

```bash
npm install next@12
```

或使用 yarn

```bash
yarn add next@12
```

## 015. 破坏性的变化

## 016. Next.js 12 特性

- Rust编译器 - ~3倍快速刷新和~5倍快速构建。
- 中间件(beta) - 在Nextjs中实现代码优于配置的充分灵活性。
- React 18支持 - 现在支持原生NextisAPI以及悬念。
- '<image/> AVIF支持 - 选择加入20%的小图片。
- Bot-aware ISR Fallback - 优化搜索引擎优化的网络爬虫。
- 本地ES模块支持 - 与标准化模块系统保持一致。
- URL导入(alpha) - 从任何URL导入软件包，无需安装。
- React服务器组件 (alpha) - 包括SSR流媒体。