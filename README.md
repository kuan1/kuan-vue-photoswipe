# kuan-vue-photoswipe

vue 简单包装一下：
[https://github.com/dimsemenov/PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

预览地址：暂时没有

## 使用(Vue)

```
import photoSwiper from '../src'

/**
  * 实例化 图片预览
  * @param {Array} images [{src: '', w: '', h: '', title: ''}] === 图片数组
  * @param {Object} options {index: 0, history: false, change: function} === 预览下标、显示hash（hash路由冲突）、change
  */
photoSwiper.preview(this.images, { index: 1, change: this.callback })

// 添加预览图片
photoSwiper.push(this.images)
```

## 更新日志

- 1.0.0 基本预览功能
