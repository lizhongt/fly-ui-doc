<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-15 17:34:25
-->

# Checkbox

---

## Import

```javascript
import { Checkbox } from 'more-idea-ui'

Vue.component(Checkbox.name, Checkbox)
```

## Usage

单独使用

```html
<md-checkbox v-model="checked" label="描述"></md-checkbox>
<md-checkbox
  class="mt-12"
  v-model="checked"
  :circle="false"
  label="描述"
></md-checkbox>
<script>
  export default {
    data() {
      return {
        checked: true
      }
    }
  }
</script>
```

在列表中使用

```html
<md-list>
  <md-list-item>
    <md-checkbox v-model="checked" position="right" label="靠右"></md-checkbox>
  </md-list-item>
  <md-list-item>
    <md-checkbox
      v-model="checked"
      position="left"
      :circle="false"
      label="靠左"
    ></md-checkbox>
  </md-list-item>
  <md-list-item>
    <md-checkbox
      v-model="checked1"
      position="left"
      disabled
      label="禁用"
    ></md-checkbox>
  </md-list-item>
  <md-list-item>
    <md-checkbox
      v-model="checked2"
      position="left"
      color="#fb602d"
      label="自定义颜色"
    ></md-checkbox>
  </md-list-item>
  <md-list-item>
    <md-checkbox v-model="checked2" position="left" label="自定义图标">
      <i
        slot="icon"
        class="iconfont"
        :style="{ color: checked2 ? 'red' : 'blue' }"
        >&#xe680;</i
      >
    </md-checkbox>
  </md-list-item>
</md-list>
<script>
  export default {
    data() {
      return {
        model1: false,
        model2: true,
        checked1: false,
        checked2: false
      }
    }
  }
</script>
```

## API

| 参数     | 说明             | 类型    | 可选值              | 默认值 |
| -------- | ---------------- | ------- | ------------------- | ------ |
| value    | v-model 双向绑定 | Boolean |                     |        |
| label    | 复选框文字       | String  |                     |        |
| position | 图标位置         | String  | follow, left, right | follow |
| circle   | 圆形复选框       |         |
| disabled | 禁用选项         | Boolean |                     | false  |
| color    | 图标颜色         | String  |                     |        |

## Slot

| 名称 | 描述                 |
| ---- | -------------------- |
| -    | 文字说明内容插槽     |
| icon | 自定义复选框图标插槽 |
