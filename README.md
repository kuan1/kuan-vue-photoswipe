# [kuan-vue-photoswipe](https://github.com/kuan1/kuan-vue-photoswipe)

使用 `vue3.0` 简单包装一下[photoSwipe](https://github.com/dimsemenov/PhotoSwipe)

图片预览只需要一行代码 [预览地址](https://kuan1.github.io/kuan-vue-photoswipe)

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

// 全局注入使用
this.$preview(
  'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
)
```

### 多张预览

```javascript
import photoSwipe from 'kuan-vue-photoswipe'
/**
 * 多组图片预览
 * @param {Array} images [{src: '', w: '', h: '', title: ''}] === 图片数组
 * @param {Object} options {index: 0, history: false, change: function} === 预览下标、显示hash（hash路由冲突）、change
 */
photoSwipe.preview(this.images, { index: 1, change: this.callback })
```
