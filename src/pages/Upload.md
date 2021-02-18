<!--
 * @Descripttion:
 * @version:
 * @Author: lizt
 * @Date: 2021-01-08 15:14:21
 * @LastEditors: lizt
 * @LastEditTime: 2021-01-15 17:40:18
-->

# Upload

> 上传文件，搭配 UploadButton, UploadFile 一起使用

---

## Import

```javascript
import { Upload, UploadButton, UploadFile } from 'more-idea-ui'

Vue.component(Upload.name, Upload)
Vue.component(UploadFile.name, UploadFile)
Vue.component(UploadButton.name, UploadButton)
```

## Usage

基础用法

```html
<md-upload
  v-model="files"
  :max-count="5"
  :before-delete="beforeDelete"
  :on-submit="onSubmit"
  @over-size="oversize"
  @file-click="fileClick"
  @file-delete="fileDelete"
></md-upload>
<script>
  export default {
    data() {
      return {
        files: [
          {
            name: 'tree.jpg',
            url: 'https://img.yzcdn.cn/vant/tree.jpg'
          },
          {
            name: 'apple-2.jpg',
            url: 'https://img.yzcdn.cn/vant/apple-2.jpg'
          },
          {
            name: 'apple-4.jpg',
            url: 'https://img.yzcdn.cn/vant/apple-4.jpg'
          }
        ]
      }
    },
    methods: {
      beforeDelete(file) {
        console.log(file)
        // eslint-disable-next-line
        return new Promise((resolve, reject) => {
          // 此处进行逻辑判断
          resolve()
        })
      },
      onSubmit(file) {
        console.log(file)
        // eslint-disable-next-line
        return new Promise((resolve, reject) => {
          // 把上传成功的url塞到files数组中
          this.files.push(this.files[0])
          // 以上可以进行上传逻辑
          this.$Toast({
            content: `文件上传成功`
          }).show()
          resolve()
        })
      },
      oversize(file) {
        console.log(file)
        this.$Toast({
          content: `文件过大`
        }).show()
      },
      fileDelete(file, index) {
        console.log(file)
        this.files.splice(index, 1)
        this.$Toast({
          content: `已删除`
        }).show()
      },
      fileClick(file, index) {
        let urls = this.files.reduce((_list, file) => {
          return _list.concat(file.url)
        }, [])
        this.$ImagePreview({
          $props: {
            images: urls,
            content: 'I am from a vue component',
            start: index
          }
        }).show()
      }
    }
  }
</script>
```

自定义显示内容

```html
<md-upload
  v-model="files"
  :on-submit="onSubmit2"
  @over-size="oversize"
  @file-click="fileClick"
>
  <md-upload-file
    v-for="(file, index) in files"
    @click="fileClick(file, index)"
    :key="index"
    :file="file"
  >
    <div class="md-upload-preview" :style="computedFileStyle">
      <img :src="file.url" class="md-upload-image" />
    </div>
    <div class="md-upload-delete">
      <i class="iconfont" @click.stop="fileDelete(file, index)">&#xe6f3;</i>
    </div>
    <div class="md-preview-cover">
      <div class="md-preivew-name">{{ file.name }}</div>
    </div>
  </md-upload-file>
  <md-upload-button>
    <div class="md-upload-wrap fb fb-cross-center fb-main-center"
      ><i class="iconfont">&#xe68d;</i></div
    ></md-upload-button
  >
</md-upload>
<script>
  export default {
    data() {
      return {
        files: [
          {
            name: 'tree.jpg',
            url: 'https://img.yzcdn.cn/vant/tree.jpg'
          },
          {
            name: 'apple-2.jpg',
            url: 'https://img.yzcdn.cn/vant/apple-2.jpg'
          },
          {
            name: 'apple-4.jpg',
            url: 'https://img.yzcdn.cn/vant/apple-4.jpg'
          }
        ]
      }
    },
    methods: {
      onSubmit2(file) {
        console.log(file)
        // 此处进行逻辑判断
        this.$Toast({
          content: `文件上传成功`
        }).show()
        // 把上传成功的url塞到files数组中
        this.files.push(this.files[0])
        return true
        // this.$Toast({
        //   content: `文件上传失败`
        // }).show()
        // return false
      },
      oversize(file) {
        console.log(file)
        this.$Toast({
          content: `文件过大`
        }).show()
      },
      fileDelete(file, index) {
        console.log(file)
        this.files.splice(index, 1)
        this.$Toast({
          content: `已删除`
        }).show()
      },
      fileClick(file, index) {
        let urls = this.files.reduce((_list, file) => {
          return _list.concat(file.url)
        }, [])
        this.$ImagePreview({
          $props: {
            images: urls,
            content: 'I am from a vue component',
            start: index
          }
        }).show()
      }
    }
  }
</script>
```

## API

| 参数         | 说明                     | 类型                                    | 可选值 | 默认值     |
| ------------ | ------------------------ | --------------------------------------- | ------ | ---------- |
| value        | v-model 双向绑定         | Array[{url: required, name, ...others}] |        | 请输入文字 |
| accept       | 支持上传的文件类型       | String                                  |        | image/\*   |
| maxSize      | 文件最大限制             | Number                                  |        | 2\*1024    |
| maxCount     | 文件个数                 | Number                                  |        | 10         |
| multiple     | 多个上传                 | Boolean                                 |        | false      |
| compress     | 压缩图片，可以限制大文件 | Boolean                                 |        | true       |
| previewImage | 预览图片                 | Boolean                                 |        | true       |
| deletable    | 是否可以删除             | Boolean                                 |        | true       |
| beforeDelete | 删除文件的钩子函数       | Promise, boolean                        |        |            |
| onSubmit     | 选择文件后触发的上传事件 | Promise, boolean                        |        |            |

## Events

| 事件名称    | 描述                                 | 参数 |
| ----------- | ------------------------------------ | ---- |
| over-size   | 选择文件过大触发                     |      |
| file-click  | 点击文件                             |      |
| file-delete | 删除文件，可以搭配 beforeDelete 使用 |      |

## Slot

### Upload

| 名称 | 描述 |
| ---- | ---- |
| -    | 内容 |

## UploadButton

| name | 描述 |
| ---- | ---- |
| -    | 内容 |

## UploadFile

| name | 描述 |
| ---- | ---- |
| -    | 内容 |
