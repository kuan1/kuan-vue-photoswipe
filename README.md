# kuan-vue-photoswipe

vue 简单包装一下：
[https://github.com/dimsemenov/PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

预览地址：暂时没有

## 使用

```
import photoSwiper from '../src'

const getImages = () => [{
  src: 'https://placekitten.com/600/400',
  w: 600,
  h: 400
},
{
  src: 'https://placekitten.com/1200/900',
  w: 1200,
  h: 900
}]

export default {
  data() {
    return {
      images: [{
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
      },
      {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
      }]
    }
  },
  mounted() {
    this.show()

    setInterval(() => {
      this.pushImages()
    }, 5000)
  },
  methods: {
    show() {
      photoSwiper.preview(this.images, { index: 1, change: this.change })
    },
    pushImages() {
      photoSwiper.push(getImages())
      // photoSwiper.push(getImages(), { index: 0 })
    },
    change(e) {
      console.log('切换页面', e)
    }
  }
}
```

## 更新日志

-
