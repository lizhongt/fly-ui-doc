<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-14 15:21:40
-->

# Calendar

> 弹性日历，支持传入状态进行区分

---

## Import

```javascript
import { Calendar } from 'more-idea-ui'

Vue.component(Calendar.name, Calendar)
```

## Usage

基础用法

```html
<md-calendar
  v-model="defaultDate"
  :mode="mode"
  :format="format"
  @choose="choose"
  :with-status="withStatus"
  :status-list="statusList"
></md-calendar>
<div class="row mt-12">
  <md-list>
    <md-list-item between>
      <md-switch
        label="带入状态"
        v-model="withStatus"
        position="left"
      ></md-switch>
    </md-list-item>
  </md-list>
</div>
<script>
  export default {
    data() {
      return {
        defaultDate: new Date(),
        format: 'YYYY/MM/DD',
        mode: 1,
        withStatus: true,
        statusList: new Array(31)
          .fill(null)
          .map((item, index) => (item = index % 2))
      }
    },
    methods: {
      choose(item, index) {
        console.log({ item, index })
        this.active = index
        this.open = false
      },
      cancel() {
        this.open = false
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

| 参数       | 说明                           | 类型    | 可选值 | 默认值     |
| ---------- | ------------------------------ | ------- | ------ | ---------- |
| value      | v-model 双向绑定               | Date    |        | new Date() |
| mode       | 日历类型， 0-周日历， 1-月日历 | Number  | 0, 1   | 0          |
| format     | 日期格式化                     | String  |        | YYYY/MM/DD |
| withStatus | 带入状态                       | Boolean |        | false      |
| statusList | 状态列表， 0-正常，1-不正常    | Array   | 0, 1   | []         |

## Events

| 事件名称           | 描述         | 参数                            |
| ------------------ | ------------ | ------------------------------- |
| change             | 日历滑动触发 |                                 |
| getDate            | 选择日期     | date                            |
| changeCalendarType | 切换日历类型 | {date, startDate, calendarType} |
