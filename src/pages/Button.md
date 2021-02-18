<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-02-02 15:04:14
-->

# Button

> Buttons with configurable type, size and customized icons.

---

## Import

```javascript
import { Button } from 'more-idea-ui'

Vue.component(Button.name, Button)
```

## Example

Configure type 按钮类型

```html
<md-button>主要按钮</md-button>
<md-button type="submary">次要按钮</md-button>
<md-button type="default">默认按钮</md-button>
<md-button type="warning">警告按钮</md-button>
<md-button type="text">文字按钮</md-button>
```

Disabled 禁用按钮

```html
<md-button disabled>主要按钮</md-button>
<md-button disabled type="submary">次要按钮</md-button>
<md-button disabled type="default">默认按钮</md-button>
<md-button disabled type="warning">警告按钮</md-button>
<md-button disabled type="text">文字按钮</md-button>
```

Loading 按钮加载

```html
<md-button disabled :loading="true">主要按钮</md-button>
<md-button disabled :loading="true" disabled>主要按钮</md-button>
```

Circle 圆角按钮

```html
<md-button size="large">大号按钮</md-button>
<md-button size="medium">中号按钮</md-button>
<md-button size="small">小号按钮</md-button>
```

Plain 朴素按钮

```html
<md-button class="mt-12" plain size="medium">主要按钮</md-button>
<md-button type="submary" plain size="medium">次要按钮</md-button>
<md-button type="default" plain size="medium">默认按钮</md-button>
<md-button icon="&#xe693;" type="warning" plain size="medium" class="mt-12"
  >自定义图标</md-button
>
```

## API

| 参数     | 说明                                                       | 类型    | 可选值                          | 默认值  |
| -------- | ---------------------------------------------------------- | ------- | ------------------------------- | ------- |
| plain    | 幽灵按钮                                                   | Boolean |                                 | false   |
| disabled | 禁用状态                                                   | Boolean |                                 | false   |
| circle   | 圆形按钮                                                   | Boolean |                                 | false   |
| type     | 按钮显示样式                                               | String  | primary, submary, warning, text | primary |
| size     | 尺寸                                                       | String  | large, medium, small, mini      | large   |
| icon     | 图标                                                       | String  |                                 |         |
| loading  | 是否加载                                                   | Boolean |                                 | false   |
| throttle | 是否节流，第一次立即执行，最后一次执行，每间隔时间调用一次 | Number  |                                 | 0       |

## Slot

| 名称 | 描述             |
| ---- | ---------------- |
| -    | 显示的文本内容   |
| icon | 自定义显示的图标 |
