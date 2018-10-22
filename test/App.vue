<template>
  <div>
    开发准备完毕
  </div>
</template>

<script>
import photoSwiper from '../src'

export default {
  mounted() {
    photoSwiper.preview([{
      src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
      w: 491,
      height: 491
    }])
  }
}
</script>
