import Vue from 'vue'

const PhotoSwipe = Vue.extend(require('./PhotoSwipe.vue').default)

let instance

export default {
  /**
   * 实例化 图片预览
   * @param {Object} options
   * @param {Array} options.images [{src: '', w: '', h: '', title: ''}] 图片数组
   * @param {Number} options.index 下标
   * @param {Boolean} options.history hash历史
   */
  preview(options = {}) {
    if (!instance) {
      instance = new PhotoSwipe({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
      Vue.nextTick(() => {
        instance.init(options)
      })
    } else {
      instance.init(options)
    }
  },
  close() {
    if (instance) {
      instance.close()
    }
  }
}
