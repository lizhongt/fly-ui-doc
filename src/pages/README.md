<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-02-04 11:35:51
-->

# More Idea UI documentation

This part introduces installation and basic usage of [More Idea UI](http://code.moredian.com:8000/frontEnd/flyui).

### npm

Installing with npm is recommended, for it works seamlessly with [webpack](https://webpack.js.org/).

```shell
npm i more-idea-ui -S
```

### createApi

Learn more usages about createApi from [npmjs.com/package/create-api](https://www.npmjs.com/package/create-api).

```
> createApi返回当前组件对象

> 操作反馈类型的组件大部分支持createApi，调用方法为this.$[componentName]

> createApi 可以接受两个参数，{ $props,$events},{$slots} 等参数，$props,$events 可以省略混合使用,$slots 需要传入一个 render 函数
```
