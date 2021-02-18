<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-19 15:36:25
-->

# Button

> 按钮

---

## 引入

```javascript
import { Searchbar } from 'more-idea-ui'

Vue.component(Searchbar.name, Searchbar)
```

## 例子

搜索框

```html
<md-searchbar v-model="model1"></md-searchbar>
<script>
  export default {
    data() {
      return {
        model1: ''
      }
    }
  }
</script>
```

输入中

```html
<md-searchbar v-model="model2"></md-searchbar>
<script>
  export default {
    data() {
      return {
        model2: '2'
      }
    }
  }
</script>
```

搜索框+取消

```html
<md-searchbar v-model="model1" :with-button="true"></md-searchbar>
<script>
  export default {
    data() {
      return {
        model1: '李中涛'
      }
    }
  }
</script>
```

搜索框+返回

```html
<md-searchbar v-model="model1" @back="close" :with-back="true"></md-searchbar>
<script>
  export default {
    data() {
      return {
        model2: '李中涛'
      }
    }
  }
</script>
```

搜索框+返回+取消

```html
<md-searchbar
  v-model="model1"
  :with-button="true"
  :with-back="true"
></md-searchbar>
<script>
  export default {
    data() {
      return {
        model2: '2'
      }
    }
  }
</script>
```

## API

## Searchbar

| 参数        | 说明         | 类型    | 可选值 | 默认值   |
| ----------- | ------------ | ------- | ------ | -------- |
| value       | v-model      | Boolean |        |          |
| with-button | 带入右侧按钮 | Boolean |        | false    |
| with-back   | 带入返回按钮 | Boolean |        | false    |
| placeholder | placeholder  | String  |        | 搜索姓名 |

## Events

| 参数   | 说明           | 类型 | 可选值 | 默认值 |
| ------ | -------------- | ---- | ------ | ------ |
| back   | 左侧返回       |      |
| cancel | 右侧取消       |      |
| focus  | 输入框获得焦点 |      |
| blur   | 输入框失去焦点 |      |

## Slot

| 名称    | 描述         |
| ------- | ------------ |
| button  | 右侧按钮插槽 |
| content | 搜索内容插槽 |
