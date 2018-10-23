<template>
  <div>
    <button @click="show">显示</button>
  </div>
</template>

<script>
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
</script>
