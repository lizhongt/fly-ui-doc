<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-19 14:47:24
-->

# Radio

---

## Import

```javascript
import { Radio } from 'more-idea-ui'

Vue.component(Radio.name, Radio)
```

## Usage

单独使用

```html
<md-radio-group v-model="radioValue1" horizontal>
  <md-radio name="1" label="选项1"></md-radio>
  <md-radio name="2" label="选项2"></md-radio>
  <md-radio name="3" label="选项3"></md-radio>
  <md-radio name="4" label="选项4"></md-radio>
  <md-radio name="5" label="选项5"></md-radio>
</md-radio-group>
<script>
  export default {
    data() {
      return {
        radioValue1: '1'
      }
    }
  }
</script>
```

文字靠左

```html
<md-radio-group v-model="radioValue3">
  <md-radio name="1" label="选项1" position="left"></md-radio>
  <md-radio name="2" label="选项2" position="left"></md-radio>
  <md-radio name="3" label="选项3" position="left"></md-radio>
  <md-radio name="4" label="选项4" position="left"></md-radio>
  <md-radio name="5" label="选项5" position="left"></md-radio>
</md-radio-group>
<script>
  export default {
    data() {
      return {
        radioValue3: '1'
      }
    }
  }
</script>
```

文字靠右-自定义选中颜色

```html
<md-radio-group
  v-model="radioValue2"
  :options="options"
  position="right"
  color="red"
>
</md-radio-group>
<script>
  export default {
    data() {
      return {
        radioValue2: '2',
        options: [
          { name: '1', label: '选项一' },
          { name: '2', label: '选项二' },
          { name: '3', label: '选项三' },
          { name: '4', label: '选项四' }
        ]
      }
    }
  }
</script>
```

文字靠右-自定义选中颜色-自定义图标

```html
<md-radio-group v-model="radioValue5">
  <md-radio
    v-for="opt in options"
    position="right"
    color="red"
    :name="opt.name"
    label="选项1"
    :key="opt.name"
  >
    <i
      slot="icon"
      class="iconfont"
      :style="{ color: opt.name === radioValue5 ? 'red' : 'blue' }"
      >&#xe680;</i
    >
  </md-radio>
</md-radio-group>
<script>
  export default {
    data() {
      return {
        radioValue5: '4',
        options: [
          { name: '1', label: '选项一' },
          { name: '2', label: '选项二' },
          { name: '3', label: '选项三' },
          { name: '4', label: '选项四' }
        ]
      }
    }
  }
</script>
```

## API

| 参数       | 说明             | 类型                                  | 可选值              | 默认值 |
| ---------- | ---------------- | ------------------------------------- | ------------------- | ------ |
| value      | v-model 双向绑定 | Boolean                               |                     |        |
| options    | 选项列表         | Array[{ name: '1', label: '选项一' }] |                     |        |
| position   | 图标位置         | String                                | follow, left, right | follow |
| horizontal | 水平方向平铺     | Boolean                               | false               |        |
| disabled   | 禁用选项         | Boolean                               |                     | false  |
| color      | 图标颜色         | String                                |                     |        |
| icon       | 图标颜色         | String                                |                     |        |

## Slot

| 名称 | 描述                 |
| ---- | -------------------- |
| -    | 文字说明内容插槽     |
| icon | 自定义复选框图标插槽 |
