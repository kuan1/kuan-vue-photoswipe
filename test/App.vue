<template>
  <div class="test-container">
    <h2>kuan-vue-photoswipe</h2>
    <p class="desc">一个简单的vue图片预览插件 图片预览只需要一行代码</p>
    <p>
      <button @click="show">显示一个</button>
      <button @click="showMore">显示多个</button>
    </p>
  </div>
</template>

<script>
// import photoSwiper from '../src'

export default {
  methods: {
    show() {
      this.$preview('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
      // photoSwiper.preview('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
    },
    showMore() {
      this.$preview(
        // ['https://placekitten.com/600/400', 'https://placekitten.com/1200/900']
        [
          {
            src: 'https://placekitten.com/600/400',
            w: 600,
            h: 400
          },
          {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
          }
        ]
      )
    }
  }
}
</script>

<style scoed>
.test-container {
  text-align: center;
}
.desc {
  color: #999;
}
</style>
