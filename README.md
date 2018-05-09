# hightchart-vue-tutorial

> using highchart with vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 包说明
#### babel-polyfill  兼容浏览器使用 Promise Object.assign() ES6 新方法
用法
```js
  // 修改build/webpack.base.conf.js 文件
  module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
      app: ['babel-polyfill', './src/main.js']
    }
  }

```

#### node-sass sass-loader scss-loader
 使用scss 语法依赖，在component 中使用：
 ```vue
  <style lang="scss" scoped>
      $border-color: #fff;
  </style>
```
#### vue-i18n
 中英文切换
 
#### 

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
