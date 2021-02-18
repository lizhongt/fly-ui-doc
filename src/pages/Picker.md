<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-15 17:14:15
-->

# Picker

> 滚动条，支持横向和纵向滚动

---

## Import

```javascript
import { Picker } from 'more-idea-ui'

Vue.component(Picker.name, Picker)
```

## Usage

基本用法

```html
<md-picker
  v-model="open"
  :columns="column1"
  :default-active="defaultActive"
  @confirm="confirm"
  @cancel="cancel"
>
</md-picker>
<script>
  export default {
    data() {
      return {
        open: false,
        column1: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        defaultActive: 0
      }
    },
    methods: {
      methods: {
        cancel() {
          this.$Toast({
            content: `取消`
          }).show()
        },
        confirm(index, value) {
          this.$Dialog({
            content: `index--> ${index}, value--> ${JSON.stringify(value)}`,
            icon: '&#xe666;'
          }).show()
        }
      }
    }
  }
</script>
```

API 调用

```
> Picker 组件使用了 createApi，可以通过 this.$Picker 直接进行调用，参数和注册组件时传入的参数一致

> createApi 可以接受两个参数，{ $props,$events},{$slots} 等参数，$props,$events 可以省略混合使用,$slots 需要传入一个 render 函数

> createApi返回当前组件对象
```

多列用法

```html
<md-button @click="openMultiPicker" class="mt-12 w-full">多列用法</md-button>
<script>
  export default {
    methods: {
      openMultiPicker() {
        let _that = this
        this.$Picker({
          $props: {
            value: this.open,
            columns: this.column2
          },
          $events: {
            cancel() {
              _that.cancel()
            },
            confirm(index, value) {
              _that.confirm(index, value)
            }
          }
        }).show()
      }
    }
  }
</script>
```

设置头部

```html
<md-button @click="openMultiPicker2" class="mt-12 w-full">设置头部</md-button>
<script>
  export default {
    methods: {
      openMultiPicker2() {
        let _that = this
        this.$Picker({
          $props: {
            value: this.open,
            columns: this.column1,
            defaultActive: this.defaultActive,
            title: '标题'
          },
          $events: {
            cancel() {
              _that.cancel()
            },
            confirm(index, value) {
              _that.confirm(index, value)
            }
          }
        }).show()
      }
    }
  }
</script>
```

## API

| 参数             | 说明               | 类型          | 可选值 | 默认值 |
| ---------------- | ------------------ | ------------- | ------ | ------ |
| columns          | 选项数组           | Array[string] |        | []     |
| title            | 标题文字           | String        |        |        |
| confirmText      | 确认按钮文字       | String        |        | 确认   |
| cancelText       | 取消按钮文字       | String        |        | 取消   |
| defaultActive    | 默认激活的选项下标 | Array, Number |        | 0      |
| showBar          | 展示高亮选择 bar   | Boolean       |        | true   |
| itemHeight       | 选项高度           | Number        |        | 44     |
| visibleItemCount | 可视选项个数       | Number        |        | 5      |

## Events

| 事件名称 | 描述                   | 参数 |
| -------- | ---------------------- | ---- |
| confirm  | 确认，emit 传递的事件  |      |
| cancel   | 取消，emit 传递的事件  |      |
| show     | 展示，挂载在实例的方法 |      |
| hide     | 隐藏，挂载在实例的方法 |      |

## Slot

| 名称   | 描述       |
| ------ | ---------- |
| header | 标题栏内容 |
