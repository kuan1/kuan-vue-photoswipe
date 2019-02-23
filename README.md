# [kuan-vue-photoswipe](https://github.com/kuan1/kuan-vue-photoswipe)

> github 仓库目录下 test 文件目录下是使用 demo

vue 简单包装一下：
[https://github.com/dimsemenov/PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

预览地址：
[https://kuan1.github.io/kuan-vue-photoswipe/demo/](https://kuan1.github.io/kuan-vue-photoswipe/demo/)

## 安装

```bash
yarn add kuan-vue-photoswipe
```

## 使用

#### 引入

```javascript
import Vue from 'vue'
import photoSwipe from 'kuan-vue-photoswipe'

Vue.use(photoSwipe)
```

#### 单张快速预览

```javascript
/**
  * @param {src} 图片地址
  */
photoSwipe.preview('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')


// 全局注入使用
this.$preview('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
```

### 多张预览、添加图片

```javascript
/**
  * 多组图片预览
  * @param {Array} images [{src: '', w: '', h: '', title: ''}] === 图片数组
  * @param {Object} options {index: 0, history: false, change: function} === 预览下标、显示hash（hash路由冲突）、change
  */
photoSwipe.preview(this.images, { index: 1, change: this.callback })
```

#### 添加预览图片

```javascript
/**
  * @param {Array} images [{src: '', w: '', h: '', title: ''}] === 图片数组
  */
photoSwipe.push(images)


photoSwipe.preview(images)
```

## 更新日志

1.0.2

- 添加参数传入修改
  const { index = 0, history = false, change, defaultOptions = {} } = options

- 1.0.1 package.json 包引入路径
- 1.0.0 基本预览功能
