<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-15 17:40:48
-->

# Toast

> 滚动条，支持横向和纵向滚动

---

## Import

```javascript
import { Toast } from 'more-idea-ui'

Vue.component(Toast.name, Toast)
```

## Usage

注册组件调用

```html
<md-toast v-model="visible" content="弹框内容"> </md-toast>
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
> toast 组件使用了 createApi，可以通过 this.$Toast 直接进行调用，参数和注册组件时传入的参数一致

> createApi 可以接受两个参数，{ $props,$events},{$slots} 等参数，$props,$events 可以省略混合使用,$slots 需要传入一个 render 函数

> createApi返回当前组件对象
```

```html
<md-button @click="text" class="mt-12 w-full">文字提示</md-button>
<md-button @click="loading" class="mt-12 w-full">加载提示</md-button>
<md-button @click="success" class="mt-12 w-full">成功提示</md-button>
<md-button @click="fail" class="mt-12 w-full">失败提示</md-button>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      text() {
        this.$Toast({
          content: '节约时间'
        }).show()
      },
      loading() {
        this.$Toast({
          type: 'loading',
          content: '输入项目名称'
        }).show()
      },
      success() {
        this.$Toast({
          type: 'success',
          content: '锄禾日当午汗滴禾下土'
        }).show()
      },
      fail() {
        this.$Toast({
          type: 'fail',
          content: '锄禾日当午汗滴禾下土'
        }).show()
      }
    }
  }
</script>
```

自定义图标

```html
<md-button @click="zdy" class="mt-12 w-full">自定义图标</md-button>
<script>
  export default {
    methods: {
      zdy() {
        this.$Toast(
          {
            type: 'success',
            content: '锄禾日当午,汗滴禾下土,谁知盘中餐,粒粒皆辛苦',
          },
          createElement => {
            return [
              createElement('div', {
                class: ['zdy-icon'],
                slot: 'icon'
              })
            ]
          }
        ).show()
      }
      }
    }
  }
</script>
```

## API

| 参数     | 说明         | 类型   | 可选值              | 默认值  |
| -------- | ------------ | ------ | ------------------- | ------- |
| type     | 对话框类型   | String | text, success, fail | loading |
| content  | 对话框内容   | String |                     |         |
| duration | 自动关闭时间 | Number |                     | 200     |
| icon     | 传入图标     | String |                     |

## Events

| 事件名称 | 描述                   | 参数 |
| -------- | ---------------------- | ---- |
| show     | 展示，挂载在实例的方法 |      |
| hide     | 隐藏，挂载在实例的方法 |      |

## Slot

| 名称 | 描述     |
| ---- | -------- |
| icon | 图标内容 |
