# Reeyou_blog_admin

> ##### 技术栈：vue-cli + vue + element + webpack 
> ##### 实现效果：博客后台管理平台，兼容移动端


## 简介
* 想自己从前端到服务端结合独立搭建一个自己的博客网站记录技术上的问题
* 整个项目分为三个部分：博客前端页面、后台管理、Koa服务端。
* 整个项目包含基础组件、后端通信、功能页面、数据存储、服务器搭建，从零到有慢慢有了一个模型，后面也会继续规划功能迭代，继续完善


## 线上预览

  [http://www.reeyou.cn:8081](http://www.reeyou.cn:8081)


## 前端页面
###### vue + axios
[项目地址](https://github.com/Reeyou/Reeyou_blog_web)

## 服务端
###### koa2
[项目地址](https://github.com/Reeyou/Reeyou_blog_koa2)

## 主要功能

 **已实现功能** 
- [x] 权限登录
- [x] 权限按钮
- [x] 文章添加、编辑、删除
- [x] 文章评论列表
- [x] 留言列表
- [x] 用户列表

 **待开发功能**
- [ ] 首页统计
- [ ] 权限路由
- [ ] 文章详情目录

            

**管理平台部分截图演示**

#### 登录
![主页部分](./assets/shoot/pic1.jpg)

#### 首页统计
![detail](./assets/shoot/pic2.jpg)

#### 列表页
![chat](./assets/shoot/pic3.jpg)

## 基本目录树
```
├─build
├─config
├─src
│  ├─assets
│  │  ├─css
│  │  ├─iconfont
│  │  └─shoot
│  ├─common
│  ├─components
│  │  ├─Layout
│  │  ├─PageTable
│  │  └─UploadImg
│  ├─config
│  ├─pages
│  │  ├─Article
│  │  ├─Home
│  │  ├─Login
│  │  ├─Message
│  │  ├─Tag
│  │  └─User
│  ├─router
│  ├─service
│  ├─store
│  └─utils
├─static
└─test
    ├─e2e
    └─unit
```

## 运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```



