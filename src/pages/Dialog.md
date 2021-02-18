<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-15 17:42:04
-->

# Dialog

> 滚动条，支持横向和纵向滚动

---

## Import

```javascript
import { Dialog } from 'more-idea-ui'

Vue.component(Dialog.name, Dialog)
```

## Usage

注册组件调用

```html
<md-dialog
  @confirm="ok"
  v-model="visible"
  title="大标题，限制在一行"
  content="弹框内容"
>
  <div slot="icon" class="my-title-img"></div>
</md-dialog>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    }
  }
</script>
```

API 调用

```
> dialog 组件使用了 createApi，可以通过 this.$Dialog 直接进行调用，参数和注册组件时传入的参数一致

> createApi 可以接受两个参数，{ $props,$events},{$slots} 等参数，$props,$events 可以省略混合使用,$slots 需要传入一个 render 函数

> createApi返回当前组件对象
```

```html
<md-button @click="alert" class="mt-12 w-full">alert</md-button>
<md-button @click="prompt" class="mt-12 w-full">Prompt</md-button>
<md-button @click="confirm" class="mt-12 w-full">confrim</md-button>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      alert() {
        let _that = this
        this.$Dialog({
          title: '使用方法调用alert',
          content: '节约时间',
          icon: '&#xe666;',
          onCancel() {},
          onConfirm(index, value) {}
        }).show()
      },
      prompt() {
        let _that = this
        this.$Dialog({
          type: 'prompt',
          title: '使用方法调用prompt',
          content: '输入项目名称',
          prompt: {
            value: '123',
            placeholder: '输入点东西...'
          },
          $events: {
            cancel() {},
            confirm(index, value) {}
          }
        }).show()
      },
      confirm() {
        let _that = this
        this.$Dialog({
          type: 'confirm',
          title: '使用方法调用confirm',
          content: '锄禾日当午汗滴禾下土',
          cancelBtn: this.cancelButton,
          $events: {
            cancel() {},
            confirm(index, value) {}
          }
        }).show()
      }
    }
  }
</script>
```

传入 slot

```html
<md-button @click="useSlot" class="mt-12 w-full">使用slot</md-button>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      useSlot() {
        let _that = this
        this.$Dialog(
          {
            title: '使用slot传入内容和图片',
            content: '锄禾日当午汗滴禾下土',
            $events: {
              confirm() {}
            }
          },
          createElement => {
            return [
              createElement('div', {
                class: ['my-title-img'],
                slot: 'icon'
              })
            ]
          }
        ).show()
      }
    }
  }
</script>
```

## API

| 参数         | 说明                                                                                   | 类型           | 可选值                 | 默认值 |
| ------------ | -------------------------------------------------------------------------------------- | -------------- | ---------------------- | ------ |
| type         | 对话框类型                                                                             | String         | alert, confirm, prompt | alert  |
| prompt       | type 设置为 prompt，搭配使用 ，{value: '', placeholder: '请输入'}                      | Object         |                        |        |
| title        | 对话框标题                                                                             | String         |                        |        |
| content      | 对话框内容                                                                             | String         |                        |        |
| maskClosable | 点击背景关闭对话框                                                                     | Boolean        |                        | false  |
| cancelBtn    | 取消按钮, 传入 string 类型可以更换文字，传入 Object{type, color, text}实现更丰富的定制 | String, Object | alert, confirm, prompt | 取消   |
| confirmBtn   | 确认按钮, 传入 string 类型可以更换文字，传入 Object{type, color, text}实现更丰富的定制 | String, Object |                        | 确认   |
| icon         | 传入图标                                                                               | String         |                        |

## Events

| 事件名称 | 描述                   | 参数        |
| -------- | ---------------------- | ----------- |
| choose   | 选中选项               | item, index |
| cancel   | 关闭 actionsheet       |             |
| show     | 展示，挂载在实例的方法 |             |
| hide     | 隐藏，挂载在实例的方法 |             |

## Slot

| 名称    | 描述 |
| ------- | ---- |
| icon    | 图标 |
| title   | 标题 |
| content | 内容 |
| buttons | 按钮 |
