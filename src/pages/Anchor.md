<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-15 17:32:55
-->

# Anchor

---

## Import

```javascript
import { Anchor } from 'more-idea-ui'

Vue.component(Anchor.name, Anchor)
```

## Usage

```html
<md-anchor text="纯文字单行"></md-anchor>
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
<md-anchor text="纯文字双行"></md-anchor>
<md-list :textline="2" arrow>
  <md-list-item title="主标题文字" sub-title="副标题文字"></md-list-item>
</md-list>
<md-anchor text="纯文字三行"></md-anchor>
<md-list :textline="3" arrow>
  <md-list-item
    title="主标题文字"
    sub-title="副标题文字"
    third-title="副标题文字"
  ></md-list-item>
</md-list>
```

## Slot

| name | 描述     |
| ---- | -------- |
| -    | 文字内容 |
