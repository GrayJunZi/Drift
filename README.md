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

## 002. 课程大纲(Next.js Couse Outline)

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

## 003. Next.js基础章节预览(Section Overview)

我们需要了解技术为什么存在？它们试图解决什么问题？即使本课程学习完成之后，也能更好地判断事物，并能够构建好您的应用程序。

- 为什么存在Next.js？
    - React已经被这么多开发人员使用，React在开发人员社区中非常流行。
- Next.js解决什么问题？它是如何使前端开发变得如此容易的？
    - Next.js不仅可以构建应用程序的前端，而且还能够构建服务端代码(后端)。
- 什么时候应该选择Next.js构建项目？什么时候使用React构建项目？

1. 什么是Next.js
2. 使用Next.js有什么好处
3. 为什么Next.js如此受欢迎。

## 004. 什么是Next.js(What is Next.js)

它是一个构建在React之上的框架，允许您在服务器上呈现内容，从而使您能够灵活地构建可伸缩的应用程序。

Next.js被成为生产级React框架，您可以选择在浏览器的客户端上呈现一个页面，但选择在另一个页面的服务器上执行其他操作，Next.js真的很灵活(flexiable)，这就是为什么能够构建真正可伸缩和高性能的应用程序。

## 005. Next.js的好处是什么(Benefits of Next.js and Difference Rendering Techniques)

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

## 006. 性能(Performance with Next.js)

构建高性能应用程序是非常困难的，Next.js处理了很多复杂的事情，所以不必太担心性能问题，有一些助于提高性能的特性是开箱即用的(out of the box)。

以下是Next.js提供的一些有助于提高性能的特性:

- 代码拆分(Code Splitting) - 将您的web应用分成小块(small chunk)，这样您就只能加载当前页面使用的块。
- 缩小文件(Minifying files) 
- 图片优化(Image Optimization)
- 预请求资源(Per-fetching assets)

![性能](resources\images\006\01.png)

## 007. 图像组件(Image Component in Next.js)

Next.js 的图像组件会根据不同视口的分辨率而加载对应大小的图片。

## 008. 基于文件的路由与SEO(File Based Routing and SEO)

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

## 009. 无服务器功能(Serverless Functions in Next.js)

使用服务器功能可以在相同的代码库中运行Node.js代码，它都位于Pages目录中，现在API文件夹中的任何内容都会自动匹配路由因为已经配置了Node.js服务，我们可以在不进行任何配置的情况下完成这些功能。

![无服务器功能](resources\images\009\01.png)

## 010. Next.js为什么流行(Next.js vs Create React App)

Next.js有非常强大的开发人员社区，可以处理很多复杂的事情。而使用React创建应用程序时，需要添加许多不同的包，掌握大量不同领域的知识，比如性能、SEO，而且需要学习很多配置，而在Next.js这些事情将由它处理，我们只关心我们需要做的东西就可以。

# 三、构建第一个Next.js应用 | Coffee Connoisseur

## 011. 项目预览(Project overview)

我们将开发以一个名为咖啡鉴赏家的应用程序，该项目会涵盖所有的基础知识。

![Coffee Connoisseur](resources\images\011\01.png)

商店列表

![商店列表](resources\images\011\02.png)

商店详情

![商店详情](resources\images\011\03.png)

## 012. 创建Next.js项目(Create a Next.js app Zero Config)

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

## 013. 如何升级Next.js版本(How to Upgrade Your Next.js Version)

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

## 014. 升级Next.js版本到12(Upgrade to Next.js 12)

> 因本身使用最新版本将跳过该命令

指定Next.js版本为12

```bash
npm install next@12
```

或使用 yarn

```bash
yarn add next@12
```

## 015. 破坏性的变化(Next.js Version Breaking Changes)

## 016. Next.js 12 特性(Features of Next.js)

- Rust编译器 - ~3倍快速刷新和~5倍快速构建。
- 中间件(beta) - 在Nextjs中实现代码优于配置的充分灵活性。
- React 18支持 - 现在支持原生NextisAPI以及悬念。
- '<image/> AVIF支持 - 选择加入20%的小图片。
- Bot-aware ISR Fallback - 优化搜索引擎优化的网络爬虫。
- 本地ES模块支持 - 与标准化模块系统保持一致。
- URL导入(alpha) - 从任何URL导入软件包，无需安装。
- React服务器组件 (alpha) - 包括SSR流媒体。

## 017. Next.js 项目预设(Next.js setup project walkthrough)

- package.json - 包含脚本命令与依赖项两部分。
- node_modules - 所有依赖包
- pages
    - api - 后端 api
    - _app.js - 入口
    - index.js - 默认路由 localhost:3000/
- public
    - 所有静态资源
- styles
    - global.css - 全局样式，将应用于整个应用程序的样式
    - Home.module.css - CSS模块，该CSS文件将根据其文件名自动与特定组件相关联。
- .next - 自动生成

## 018. 添加页脚组件(_app.js Solution with Footer)

在 `_app.js` 添加页脚 将应用于所有页面。
```js
export default function App({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <footer>Copyright &copy; 2023</footer>
  </div>;
}
```

## 019. 什么是快速刷新(What is Fast Refresh)

快速刷新是一个特性，它为您在应用程序中所作的任何编辑提供即时反馈，这意味着如果我去我的代码库进行任何更改，转到运行应用程序的浏览器，这些变化将立即得到应用，无需重新加载应用程序。

## 020. 什么是CSS模块(What are CSS Modules)

CSS Modules 是由Next.js开箱即用提供的，任何具有后缀`.module.css`的文件都是一个CSS模块(这是惯例)。

使用CSS模块的好处是，这个文件可用的CSS代码全是主组件的作用域，例如 `Home.module.css` 的作用域，被限制在Home组件范围内。

## 021. Home页面(Let's get ready for Home Page)

## 022. App背景(App background)

可以通过 [Mesh Gradient](https://meshgradient.com) 网站定制渐变色图片。

## 023. Banner组件(Banner Component)

![Banner组件](resources\images\023\01.png)

## 024. 移动端优先开发&Banner组件样式(Mobile First Development & Banner Component Styling)

![Banner组件](resources\images\024\01.png)

## 025. Head组件(Next.js Head Component)

# 四、Next.js路由(Project #1: Routing with Next.js)

## 026. 在Next.js中的路由(Routing in Next.js)

Next.js是基于文件系统的路由。

![Routing](resources\images\026\01.png)

## 027. 为咖啡商店页添加路由(Add Routing for Coffee Store Page)

Pages文件夹中的任何嵌套文件基本上都是嵌套路由。

## 028. 什么是动态路由(What is Dynamic Routing)

动态路由允许您定义可以是动态的路由，我们使用中括号语法来定义路由中特定的值，使用`useRouter`获取路由中的动态数据。

```js
import { useRouter } from "next/router";

const CoffeeStore = () => {
    const router = useRouter();
    console.log('router', router);
    return <div>Coffee Store Page {router.query.id}</div>;
};

export default CoffeeStore;
```

## 029. 使用Link组件添加路由(Add routes using Link Component)

链接本质上是用户可以来回路由的一种方式，它们链接到不同的页面。

如果我们没有实现Next.js的链接，甚至只使用react，纯HTML可以使用锚元素(anchor) 通常被称为`a`标签，它允许创建超链接，这将允许您链接到不同的页面，我们需要做的事就是使用`href`并提供希望它路由到的地址。

Next.js为我们提供了一个名为`Link`的`react`组件，允许我们轻松改变路由，Link组件类似于锚元素，但它为我们提供了更多的开箱即用的功能，

## 030. 使用Link组件添加路由到动态页面(Add routes to Dynamic Page with Link Component)

## 031. 路由解决方案(Solution Routing)

# 五、Next.js中的样式(Project #1: Styling in Next.js)

## 032. Home页样式(Style our homepage)

## 033. Hero图片生成器(Hero Image Generator)

Hero Image 本质上代表了在网页上使用的一个大横幅图像(Banner Image)。

- [icons8](https://icons8.com) - 免费插图工具。
- [Mega Creator](https://icons8.com/.mega-creator/) - 制作自己的图像。

## 034. 添加Hero组件(Add Hero Component)

## 035. Image组件(Next.js Image Component)

图像组件的本质是调整图像的大小并优化它们，会体现在不同的尺寸提供最优化的图像。

## 036. Home页图像(Hero Image on Home Page)

## 037. 设置字体(Setup fonts in Next.js)

通过 https://fonts.google.com 网站下载字体，放至 `public` 文件夹下。

## 038. 加载字体(Load fonts on the page)

我们可以把加载字体放置到 `_app.js` 中，这样任何公共组件都会起效。

## 039. Next.js中的Document(Document in Next.js)

Next.js中提供了 `Document` 来操作我们的html文档，在 `pages`文件夹下添加`_document.js`文件。

## 040. 在Document中应用字体(Apply fonts in Document)

```html
<link
    -- relationship 
    rel="preload" -- 预加载: 告诉浏览器去预加载这个资源
    href="/fonts/IBMPlexSans-Regular.ttf" -- 连接字体资源
    as="fint" -- 只有使用 rel="preload" 时才会设置必要字体头
    crossOrigin="anonymous" -- 不需要认证
/>
```

# 六、Next.js中的Hydration、SEO和不同的渲染技术 (Hydration, SEO and Different Rendering Techniques in Next.js)

## 041. 什么是SEO(What is SEO)

SEO代表搜索引擎优化(Search Engine Optimization)，它本质上是一种提高流量质量和网站数量的做法。

![SEO](resources\images\041\01.png)

## 042. Next.js中的预渲染(Pre-rendering in Next.js)

Next.js应用程序和普通React应用程序之间最大的优势是我们可以马上看到页面，爬虫机器人可以很快发现页面及内容，并能够正确地对其进行排名，所以这对于预渲染说非常重要，因为它会带来更好的性能。作为用户请求页面时，那个页面会很快加载 因为元素已经提前呈现了，因此得到了更好的性能。

![Pre-rendering](resources\images\042\01.png)

