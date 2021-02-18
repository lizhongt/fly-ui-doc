<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-19 15:45:30
-->

# List

> 列表，用来展示列表信息

---

## Import

```javascript
import { List, ListItem } from 'more-idea-ui'

Vue.component(List.name, List)
Vue.component(ListItem.name, ListItem)
```

## 纯文字单行

```html
<md-list arrow>
  <md-list-item title="主标题文字">
    <span
      slot="more"
      style="vertical-align: middle; font-size: 17px;color: rgba(17,31,44,0.4);"
      >详细信息</span
    >
  </md-list-item>
  <md-list-item title="主标题文字"></md-list-item>
</md-list>
```

## 纯文字双行

```html
<md-list :textline="2" arrow>
  <md-list-item title="主标题文字" sub-title="副标题文字"></md-list-item>
</md-list>
```

## 纯文字三行

```html
<md-list :textline="3" arrow>
  <md-list-item
    title="主标题文字"
    sub-title="副标题文字"
    third-title="副标题文字"
  ></md-list-item>
</md-list>
```

## 图标和文字

```html
<md-list>
  <md-list-item avator title="主标题文字">
    <div class="avator" slot="avator"
      ><i class="iconfont" style="font-size: 36px;">&#xe6c6;</i></div
    >
  </md-list-item>
  <md-list-item avator title="主标题文字">
    <div class="avator" slot="avator"
      ><i class="iconfont" style="font-size: 36px;">&#xe6c6;</i></div
    >
  </md-list-item>
</md-list>
<md-list :textline="2">
  <md-list-item title="主标题文字" sub-title="副标题文字"
    ><div class="avator" slot="avator"
      ><i class="iconfont" style="font-size: 36px;">&#xe6c6;</i></div
    ></md-list-item
  >
</md-list>
<md-list-item
    title="主标题文字"
    sub-title="副标题文字"
    third-title="副标题文字"
  >
    <div class="avator" slot="avator"
      ><i class="iconfont" style="font-size: 36px;">&#xe6c6;</i></div
    >
    <span
      slot="more"
      style="vertical-align: middle; font-size: 17px;color: rgba(17,31,44,0.4);"
      >详细信息</span
    >
  </md-list-item>
</md-list>
```

## API

### List

| 参数      | 说明         | 类型    | 可选值 | 默认值 |
| --------- | ------------ | ------- | ------ | ------ |
| arrow     | 展示右侧箭头 | Boolean |        | false  |
| text-line | 展示行数     | Number  |        | 1      |

## Slot

| name    | 描述               |
| ------- | ------------------ |
| default | 默认插槽，展示内容 |

## ListItem

| 参数       | 说明        | 类型    | 可选值 | 默认值 |
| ---------- | ----------- | ------- | ------ | ------ |
| avator     | 展示头像    | Boolean |        | false  |
| title      | 第 1 行文字 | String  |        |        |
| subTitle   | 第 2 行文字 | String  |        |        |
| thirdTitle | 第 3 行文字 | String  |        |        |

## Slot

| name       | 描述               |
| ---------- | ------------------ |
| -          | 默认插槽，展示内容 |
| title      | 主标题插槽         |
| subTitle   | 副标题插槽         |
| thirdTitle | 副标题 2 容插槽    |
