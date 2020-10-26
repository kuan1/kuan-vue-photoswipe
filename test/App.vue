<template>
  <div class="test-container">
    <h2>kuan-vue-photoswipe</h2>
    <p class="desc">一个简单的vue图片预览插件 图片预览只需要一行代码</p>

    <a href="https://github.com/kuan1/kuan-vue-photoswipe">点击查看使用文档</a>

    <p style="margin-top: 100px">
      <button @click="show">显示一个</button>
      <button @click="showMore">显示多个</button>
    </p>
  </div>
</template>

<script>
import photoSwipe from 'kuan-vue-photoswipe';

export default {
  methods: {
    show() {
      photoSwipe.preview('http://pic.kuan1.top/714ac69ed6649e86797acf7a9051f5cf.jpg');
    },
    showMore() {
      photoSwipe.preview(
        // ['https://placekitten.com/600/400', 'https://placekitten.com/1200/900']
        [
          {
            src: 'http://pic.kuan1.top/714ac69ed6649e86797acf7a9051f5cf.jpg',
            w: 1024,
            h: 1024,
          },
          {
            src: 'http://pic.kuan1.top/b8274f321246d26c069dd0618a3f2af6.jpg',
            w: 1024,
            h: 2000,
          },
        ]
      );
    },
  },
};
</script>

<style scoed>
.test-container {
  text-align: center;
}
.desc {
  color: #999;
}
</style>
