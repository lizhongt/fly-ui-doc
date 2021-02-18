<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-19 14:48:16
-->

# Switch

---

## Import

```javascript
import { Switch } from 'more-idea-ui'

Vue.component(Switch.name, Switch)
```

## Usage

基础用法

```html
<md-list>
  <md-list-item>
    <md-switch v-model="model1">Switch: {{ model1 }}</md-switch>
  </md-list-item>
</md-list>
<script>
  export default {
    data() {
      return {
        model1: false
      }
    }
  }
</script>
```

禁用

```html
<md-list>
  <md-list-item>
    <md-switch disabled v-model="model2">Switch: {{ model2 }}</md-switch>
  </md-list-item>
</md-list>
<script>
  export default {
    data() {
      return {
        model2: true
      }
    }
  }
</script>
```

自定义颜色

```html
<md-list>
  <md-list-item>
    <md-switch v-model="model2" active-color="red" inactive-color="green"
      >Switch: {{ model2 }}</md-switch
    >
  </md-list-item>
  <md-list-item>
    <md-switch
      label="Switch"
      v-model="model2"
      active-color="red"
      inactive-color="green"
    ></md-switch>
  </md-list-item>
</md-list>
<script>
  export default {
    data() {
      return {
        model2: true
      }
    }
  }
</script>
```

## API

| 参数          | 说明             | 类型    | 可选值 | 默认值 |
| ------------- | ---------------- | ------- | ------ | ------ |
| value         | v-model 双向绑定 | Boolean |        |        |
| label         | 文字说明         | Boolean | false  |        |
| disabled      | 禁用选项         | Boolean |        | false  |
| activeColor   | 选中展示颜色     | String  |        |        |
| inactiveColor | 未选中展示颜色   | String  |        |        |

## Slot

| 名称 | 描述                 |
| ---- | -------------------- |
| -    | 文字说明内容插槽     |
| icon | 自定义复选框图标插槽 |
