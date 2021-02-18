<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-19 14:39:57
-->

# Badge

---

## Import

```javascript
import { Badge } from 'more-idea-ui'

Vue.component(Badge.name, Badge)
```

## Usage

纯文字单行

```html
<md-badge content="1" color="warning" circle></md-badge>
<md-badge content="99+" color="warning"></md-badge>
<md-badge content="NEW" color="warning"></md-badge>
<md-badge color="transparent">
  <span slot="content" style="font-size: 20px; color: red;">©</span>
</md-badge>
```

在列表中使用

```html
<md-list arrow>
  <md-list-item arrow title="主标题文字">
    <template slot="more">
      <span
        style="vertical-align: middle; font-size: 17px;color: rgba(17,31,44,0.4);margin-right: 4px;"
        >详细信息</span
      >
      <md-badge content="1" color="warning" circle></md-badge>
    </template>
  </md-list-item>
  <md-list-item title="主标题文字">
    <template slot="more">
      <span
        style="vertical-align: middle; font-size: 17px;color: rgba(17,31,44,0.4);margin-right: 4px;"
        >详细信息</span
      >
      <md-badge :size="6" color="warning" circle></md-badge>
    </template>
  </md-list-item>
  <md-list-item title="主标题文字">
    <div slot="more" class="relative">
      <div
        style="width: 36px;height: 36px;background: rgba(17,31,44,0.28);border-radius: 4px;"
      ></div>
      <md-badge
        style="position: absolute;top: -2px;right: 18px;"
        :size="6"
        color="warning"
        circle
      ></md-badge>
    </div>
  </md-list-item>
  <md-list-item title="主标题文字">
    <div slot="more" class="relative">
      <div
        style="width: 36px;height: 36px;background: rgba(17,31,44,0.28);border-radius: 4px;"
      ></div>
      <md-badge
        style="position: absolute;top: -6px;right: 12px;"
        content="6"
        color="warning"
        circle
      ></md-badge>
    </div>
  </md-list-item>
</md-list>
```

## API

| 参数    | 说明         | 类型    | 可选值                                 | 默认值 |
| ------- | ------------ | ------- | -------------------------------------- | ------ |
| content | 徽章文字内容 | String  |                                        |        |
| color   | 徽章背景颜色 | String  | submary, primary, warning, transparent |        |
| circle  | 圆形徽章     | Boolean |                                        | false  |
| size    | 徽章大小     | Number  |                                        | 18     |

## Slot

| name    | 描述         |
| ------- | ------------ |
| content | 徽章文字内容 |
