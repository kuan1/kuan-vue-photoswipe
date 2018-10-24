<template>
  <button @click="show">显示</button>
</template>

<script>
// import photoSwiper from '../src'

export default {
  methods: {
    show() {
      this.$preview('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
      // photoSwiper.preview('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
    }
  }
}
</script>

<style>
</style>
