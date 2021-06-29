# react-router 源码阅读

主要阅读 `react-router` 库的源码，并手写一个路由库。

[react-router 官网](https://reactrouter.com/web/guides/quick-start) </br>
[react-router github](https://github.com/ReactTraining/react-router)</br>

## 安装 react-router

当前版本为 `5.2.0`

```bash
npm install react-router-dom

// 或者
yarn add react-router-dom
```

项目运行

```bash
yarn start
```

## 实现功能 & API

- [x] Router
  - [x] BroswerRouter
  - [ ] HistoryRouter
- [ ] Route
  - [ ] Route children
  - [ ] Route component
  - [ ] Route render
- [ ] Switch
- [ ] Link
- [ ] 404
- [ ] React Router Hooks

- Router 包裹 React-router 应用
- Route 定义具体路由，接收路由 path 和对应渲染的组件作为参数。
- Switch 匹配路由，浏览器匹配路由，渲染第一个匹配路由
- Link 路由跳转组件

实现 `React-router` 的关键点:

- 1.监听 URL 变更 -> history 库
- 2.获取对应的新组件

## 使用 history 库

[history](https://github.com/ReactTraining/history)

## 使用 path-to-regexp 库

[path-to-regexp](https://github.com/pillarjs/path-to-regexp)
