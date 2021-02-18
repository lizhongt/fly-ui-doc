# Tabbar

> 标签栏

---

## 引入

```javascript
import { Tabbar, TabbarItem } from 'more-idea-ui'

Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
```

## 例子

两栏

```html
<md-tabbar :value.sync="1">
  <md-tabbar-item>选项一</md-tabbar-item>
  <md-tabbar-item>选项二</md-tabbar-item>
</md-tabbar>
```

三栏

```html
<md-tabbar :value.sync="active1">
  <md-tabbar-item v-for="item in items1" :key="item.name" :name="item.name"
    >{{ item.text }}</md-tabbar-item
  >
</md-tabbar>
<script>
export default {
  data() {
    return {
      active1: '2',
      items1: [
        {
          text: '选项一',
          name: '1'
        },
        {
          text: '选项二',
          name: '2'
        },
        {
          text: '选项三',
          name: '3'
        }
      ],
    }
  },
}
```

四栏

```html
<md-tabbar :value.sync="active2">
  <md-tabbar-item v-for="item in items2" :key="item.name" :name="item.name"
    >{{ item.text }}</md-tabbar-item
  >
</md-tabbar>
<script>
export default {
  data() {
    return {
      active2: '1',
      items2: [
       {
          text: '选项一',
          name: 1
        },
        {
          text: '选项二',
          name: 2
        },
        {
          text: '选项三',
          name: 3
        },
        {
          text: '选项四',
          name: 4
        }
      ],
    }
  },
}
```

自定义颜色

```html
<md-tabbar
  :value.sync="active3"
  indicator-color="red"
  inactive-color="pink"
  active-color="green"
>
  <md-tabbar-item
    v-for="item in items3"
    :key="item.name"
    :name="item.name"
    >{{ item.text }}</md-tabbar-item
  >
</md-tabbar>
<script>
export default {
  data() {
    return {
      active3: '1',
      items3: [
       {
          text: '选项一',
          name: 1
        },
        {
          text: '选项二',
          name: 2
        },
        {
          text: '选项三',
          name: 3
        },
        {
          text: '选项四',
          name: 4
        }
      ],
    }
  },
}
```

不固定栏目

```html
<md-tabbar :value.sync="active4" :fixed="false">
  <md-tabbar-item
    v-for="item in items4"
    :key="item.name"
    :name="item.name"
    >{{ item.text }}</md-tabbar-item
  >
</md-tabbar>
<script>
export default {
  data() {
    return {
      active4: '4',
      items4: [
       {
          text: '选项一',
          name: 1
        },
        {
          text: '选项二',
          name: 2
        },
        {
          text: '选项三',
          name: 3
        },
        {
          text: '选项四',
          name: 4
        }， {
          text: '选项五',
          name: 5
        },
        {
          text: '选项六',
          name: 6
        }
      ],
    }
  },
}
```

## API

### tabbar

| 参数           | 说明                   | 类型    | 可选值 | 默认值 |
| -------------- | ---------------------- | ------- | ------ | ------ |
| value          | v-model                | String  |        |        |
| fixed          | 选项是否为固定数字     | Boolean |        | true   |
| activeColor    | 当前激活的栏目字体颜色 | \*      | String |        |
| inactiveColor  | 未激活的栏目字体颜色   | \*      | String |        |
| indicatorColor | 指示器的颜色           | \*      | String |        |

## Slot

### tabbar

| 名称 | 描述 |
| ---- | ---- |
| -    | 内容 |

### tab-item

| 名称 | 描述 |
| ---- | ---- |
| -    | 内容 |
