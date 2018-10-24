<template>
  <h1>
    <button @click="show">显示一个</button>
    <button @click="showMore">显示多个</button>
  </h1>
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

<style>
</style>
