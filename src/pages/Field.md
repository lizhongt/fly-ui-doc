<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-19 14:48:03
-->

# Field

---

## Import

```javascript
import { Field } from 'more-idea-ui'

Vue.component(Field.name, Field)
```

## Usage

基础用法

```html
<md-field
  v-model="value1"
  :clearable="clearable"
  :required="required"
  :readOnly="readOnly"
  :maxlength="maxlength"
  label="文字"
  :type="type"
  :width="width"
  :height="height"
></md-field>
<md-radio-group v-model="type" :options="options" horizontal />
<md-list>
  <md-list-item between>
    <md-switch label="是否只读" v-model="readOnly" position="left"></md-switch>
  </md-list-item>
  <md-list-item between>
    <md-switch
      label="是否清空按钮"
      v-model="clearable"
      position="left"
    ></md-switch>
  </md-list-item>
  <md-list-item between>
    <md-switch label="是否必填" v-model="required" position="left"></md-switch>
  </md-list-item>
  <md-list-item>
    <md-field v-model="width" label="宽度"></md-field>
  </md-list-item>
  <md-list-item>
    <md-field v-model="height" label="高度"></md-field>
  </md-list-item>
  <md-list-item>
    <md-field :width="120" v-model="maxlength" label="最大长度"></md-field>
  </md-list-item>
</md-list>
<script>
  export default {
    data() {
      return {
        value1: 'asd',
        options: [
          { name: 'text', label: 'text' },
          { name: 'password', label: 'password' },
          { name: 'tel', label: 'tel' },
          { name: 'number', label: 'number' },
          { name: 'choose', label: 'choose' },
          { name: 'textarea', label: 'textarea' }
        ],
        type: 'text',
        readOnly: false,
        clearable: false,
        required: false,
        maxlength: 10,
        width: 80,
        height: 200
      }
    }
  }
</script>
```

## API

| 参数        | 说明                                         | 类型           | 可选值                                        | 默认值     |
| ----------- | -------------------------------------------- | -------------- | --------------------------------------------- | ---------- |
| value       | v-model 双向绑定                             | String, Number |                                               | 请输入文字 |
| placeholder | 占位文字                                     | String         |                                               |            |
| label       | 文字说明                                     | Boolean        | false                                         |            |
| type        | field 类型                                   | String         | text, number, tel, choose, password, textarea | text       |
| required    | 是否必输                                     | Boolean        |                                               | false      |
| readOnly    | 是否只读                                     | Boolean        |                                               | false      |
| clearable   | 带有清空功能                                 | Boolean        |                                               | false      |
| maxlength   | 文字最大长度                                 | Number         |                                               | -1         |
| width       | 左侧说明文字的宽度                           | Number         |                                               | -1         |
| height      | textarea 的高度，需要将 type 设置为 textarea | Number         |                                               | -1         |

## Slot

| 名称 | 描述                 |
| ---- | -------------------- |
| -    | 文字说明内容插槽     |
| icon | 自定义复选框图标插槽 |
