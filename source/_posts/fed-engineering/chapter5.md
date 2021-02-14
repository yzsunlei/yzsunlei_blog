
---
id: 685682
space: fed-engineering
slug: intro
url: /fed-engineering/chapter5
title: 前端工程化之CSS处理
summary: 前端工程化实质上是解决效率问题...
coverImg: null
createTime: 2021-02-12T06:07:04.000Z 
upateTime: 2021-02-12T10:42:49.000Z
wordCount: 349
layout: doc
---

## 前端工程化之CSS处理

- 这篇实际上主要讲的是CSS处理器。CSS预处理器定义了一种新的语言，基本的思想是用一种专门的编程语言，开发者只需要使用这种语言进行编码工作，减少枯燥无味的CSS代码编写过程的同时，它能让你的CSS具备更加简洁、适应性更强、可读性更强、层级关系更加明显、更易于代码的维护等诸多好处。

- CSS预处理器种类繁多，目前三种主流CSS预处理器是Less、Sass（Scss）及Stylus。另外还有一种后处理器PostCss，下面分别介绍一下。

#### Scss

- 2007年诞生，最早也是最成熟的CSS预处理器

#### Less

- 2009年出现，受SASS的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手。

#### Stylus

- 2010年产生，来自Node.js社区。主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者

#### PostCss

- 前面3种CSS处理器都是预处理，现在要讲的PostCss实际上是一款后处理器。它可以用来分析CSS规则，并给出AST（抽象语法树），可以很方便的用JS来修改CSS。