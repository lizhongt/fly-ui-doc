<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-02-05 11:51:16
-->

# Bar

---

## Import

```javascript
import { Bar } from 'more-idea-ui'

Vue.component(Bar.name, Bar)
```

## Usage

```html
<md-bar>点击跳转到相关页面，点X关闭</md-bar>
<md-bar class="mt-12" type="warning"
  >点击跳转到相关页面，解决问题后自动关闭</md-bar
>
```

## API

| 参数    | 说明         | 类型         | 可选值 | 默认值 |
| ------- | ------------ | ------------ | ------ | ------ |
| type    | 类型         | info,warning |        |        |
| closabe | 带有关闭按钮 | Boolean      |        | false  |

## Events

| 事件名称 | 描述     | 参数 |
| -------- | -------- | ---- |
| close    | 关闭事件 |      |

## Slot

| name    | 描述      |
| ------- | --------- |
| -       | 文字 内容 |
| content | html 内容 |
| icon    | 图标 内容 |
