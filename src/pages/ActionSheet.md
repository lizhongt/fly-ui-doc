<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-02-04 11:34:17
-->

# ActionSheet

> 滚动条，支持横向和纵向滚动

---

## Import

```javascript
import { ActionSheet } from 'more-idea-ui'

Vue.component(ActionSheet.name, ActionSheet)
```

## Usage

基本用法

```html
<md-action-sheet
  v-model="open"
  :title="title"
  :cancel-text="cancelText"
  :actions="actions"
  @choose="choose"
  @cancel="cancel"
  :active="active"
></md-action-sheet>
<script>
  export default {
    data() {
      return {
        open: false,
        actions: [
          {
            name: '选项一',
            id: 1
          },
          {
            name: '选项二',
            id: 2
          },
          {
            name: '选项三',
            id: 3
          }
        ],
        title: '自定义标题',
        cancelText: '关闭',
        active: 0
      }
    },
    methods: {
      choose(item, index) {
        this.active = index
        this.open = false
        this.$Dialog({
          content: `index--> ${index}, value--> ${JSON.stringify(item)}`,
          icon: '&#xe666;'
        }).show()
      },
      cancel() {
        this.open = false
        this.$Toast({
          content: `取消`
        }).show()
      }
    }
  }
</script>
```

API 调用

```
> action-sheet 组件使用了 createApi，可以通过 this.$ActionSheet 直接进行调用，参数和注册组件时传入的参数一致

> createApi 可以接受两个参数，{ $props,$events},{$slots} 等参数，$props,$events 可以省略混合使用,$slots 需要传入一个 render 函数

> createApi返回当前组件对象
```

```html
<md-button @click="openSheet" class="mt-12 w-full">API调用</md-button>
<script>
  export default {
    data() {
      return {
        open: false,
        actions: [
          {
            name: '选项一',
            id: 1
          },
          {
            name: '选项二',
            id: 2
          },
          {
            name: '选项三',
            id: 3
          }
        ],
        title: '自定义标题',
        cancelText: '关闭',
        active: 0
      }
    },
    methods: {
      choose(item, index) {
        this.active = index
        this.open = false
        this.$Dialog({
          content: `index--> ${index}, value--> ${JSON.stringify(item)}`,
          icon: '&#xe666;'
        }).show()
      },
      cancel() {
        this.open = false
        this.$Toast({
          content: `取消`
        }).show()
      },
      openSheet() {
        let _that = this
        this.$ActionSheet({
          title: this.title,
          cancelText: this.cancelText,
          actions: this.actions,
          onChoose(item, index) {
            _that.choose(item, index)
          },
          onCancel() {
            _that.cancel()
          },
          active: this.active
        }).show()
      }
    }
  }
</script>
```

## API

| 参数       | 说明                               | 类型            | 可选值 | 默认值 |
| ---------- | ---------------------------------- | --------------- | ------ | ------ |
| actions    | 选项列表 {name： required, others} | Array           |        | []     |
| active     | 当前选择下标                       | String, Number] |        | -1     |
| title      | 标题                               | String          |        | 请选择 |
| cancelText | 取消文字                           | String          |        | 取消   |

## Events

| 事件名称 | 描述                   | 参数        |
| -------- | ---------------------- | ----------- |
| choose   | 选中选项               | item, index |
| cancel   | 关闭 actionsheet       |             |
| show     | 展示，挂载在实例的方法 |             |
| hide     | 隐藏，挂载在实例的方法 |             |

## Slot

| 名称   | 描述         |
| ------ | ------------ |
| button | 右侧按钮内容 |
