import { createApp } from 'vue'

import PhotoSwipe from './PhotoSwipe'

let app

export default {
  /**
   * 实例化 图片预览
   * @param {Array} images [{src: '', w: '', h: '', title: ''}] 图片数组
   * @param {Object} options {index: 0, history: false, change, defaultOptions: {}}
   */
  preview(...args) {
    if (!app) {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const instance = createApp(PhotoSwipe)
      app = instance.mount(div)
      app.$nextTick(() => {
        app.init(...args)
      })
    } else {
      app.init(...args)
    }
  },
  close() {
    app && app.close()
  },
  install(app) {
    app.config.globalProperties.$preview = this.preview
  },
}
