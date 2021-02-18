<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-15 17:32:33
-->

# Swiper

> 滚动条，支持横向和纵向滚动

---

## Import

```javascript
import { Swiper, SwiperItem } from 'more-idea-ui'

Vue.component(Swiper.name, Swiper)
Vue.component(SwiperItem.name, SwiperItem)
```

## Usage

纵向滚动

```html
<md-swiper
  v-if="!refresh"
  :show-indicators="showIndicators"
  @change="slideChange"
  ref="mySwipe"
  :options="options"
>
  <md-swiper-item v-for="(item, index) in items" :key="index"
    ><b>{{ item }}</b></md-swiper-item
  >
</md-swiper>

<script>
  export default {
    data() {
      return {
        options: {
          // 开始滚动位置
          startSlide: 0,
          // 滚动速度
          speed: 400,
          // 自动轮播时间
          autoplay: false,
          // 是否无限循环
          loop: true,
          // 是否禁止页面滚动
          disableScroll: false,
          // 阻止冒泡
          stopPropagation: false,
          // 横向
          horizontal: true
        },
        showIndicators: false,
        items: new Array(5).fill(null).map((item, index) => (item = index + 1)),
        refresh: false
      }
    },
    watch: {
      options: {
        deep: true,
        handler() {
          this.refresh = true
          this.$nextTick(() => {
            this.refresh = false
          })
        }
      }
    },
    methods: {
      prev() {
        this.$refs.mySwipe.prev()
      },
      next() {
        this.$refs.mySwipe.next()
      },
      slide() {
        this.$refs.mySwipe.slideTo(3)
      },
      slideChange(index) {
        console.log(index)
      },
      add() {
        this.items.push(this.items.length + 1)
        this.$refs.mySwipe.refresh()
      }
    }
  }
</script>
```

## API

options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | ---------- | ------- | ------ | ------ |
| startSlide | 初始下标 | Number | | 0 |
| speed | 滑动速度 | Number | | true |
| autoplay | 自动轮播 | Number | | 400 |
| loop | 无限循环 | Boolean | | true |
| disableScroll | 禁止滑动 | Boolean | | false |
| stopPropagation | 阻止冒泡 | Boolean | | false |
| horizontal | 水平滑动 | Boolean | | true |

| 参数           | 说明       | 类型    | 可选值 | 默认值 |
| -------------- | ---------- | ------- | ------ | ------ |
| showIndicators | 显示指示器 | Boolean |        | false  |

## Events

| 事件名称 | 描述     | 参数             |
| -------- | -------- | ---------------- |
| change   | 界面滑动 | index(从 0 开始) |

## Slot

### Swiper

| 名称 | 描述 |
| ---- | ---- |
| -    | 内容 |

### SwiperItem

| name       | 描述       |
| ---------- | ---------- |
| -          | 内容       |
| indicators | 指示器内容 |
