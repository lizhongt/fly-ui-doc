<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-19 15:52:05
-->

# Tip

---

## Import

```javascript
import { Tip } from 'more-idea-ui'

Vue.component(Tip.name, Tip)
```

## Usage

```html
<div class="w-full h-full p-12-0 p-0-16">
  <div
    class="tips-demo fb fb-col fb-main-center fb-cross-center"
    style="height: 240px"
  >
    <div class="mt-60" style="position: relative" ref="tip1">
      <md-button @click="showTip('bottom')" plain>md ui</md-button>
      <md-tip
        :style="tipStyle"
        v-model="visible"
        :type="!primary ? 'transparent' : 'primary'"
        :direction="direction"
        >我是一只小可爱</md-tip
      >
    </div>
  </div>
  <md-button class="w-full mt-12" @click="showTip('bottom')">上</md-button>
  <md-button class="w-full mt-12" @click="showTip('top')">下</md-button>
  <md-button class="w-full mt-12" @click="showTip('right')">左</md-button>
  <md-button class="w-full mt-12" @click="showTip('left')">右</md-button>

  <md-button class="w-full mt-24" @click="primary = !primary"
    >切换类型</md-button
  >
</div>
<script>
  export default {
    data() {
      return {
        visible: false,
        direction: 'top',
        tipStyle: {},
        primary: true
      }
    },
    computed: {},
    watch: {
      primary() {
        this.showTip(this.direction)
      }
    },
    methods: {
      showTip(direction) {
        this.direction = direction
        this.visible = true
        switch (direction) {
          case 'top':
            this.tipStyle = this.primary
              ? 'left: -25px; bottom: -46px;'
              : 'left: -32px; bottom: -60px;'
            break
          case 'bottom':
            this.tipStyle = this.primary
              ? 'left: -25px; top: -40px;'
              : 'left: -35px; top: -55px;'
            break
          case 'left':
            this.tipStyle = this.primary
              ? 'right: -150px; top: 4px;'
              : 'right: -160px; top: -1px;'
            break
          case 'right':
            this.tipStyle = this.primary
              ? 'left: -150px; top: 4px;'
              : 'left: -160px; top: -1px;'
            break
        }
      }
    }
  }
</script>
```

## API

| 参数    | 说明         | 类型                | 可选值 | 默认值 |
| ------- | ------------ | ------------------- | ------ | ------ |
| type    | 类型         | primary,transparent |        |        |
| closabe | 带有关闭按钮 | Boolean             |        | false  |

## Events

| 事件名称 | 描述     | 参数 |
| -------- | -------- | ---- |
| close    | 关闭事件 |      |

## Slot

| 名称    | 描述      |
| ------- | --------- |
| -       | 文字 内容 |
| content | html 内容 |
| icon    | 图标 内容 |
