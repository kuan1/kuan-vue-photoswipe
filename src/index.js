import Vue from 'vue'

const PhotoSwipe = Vue.extend(require('./PhotoSwipe.vue').default)

let instance

export default {
  /**
   * 实例化 图片预览
   * @param {Array} images [{src: '', w: '', h: '', title: ''}] 图片数组
   * @param {Object} options {index: 0, history: false}
   */
  preview(...args) {
    if (!instance) {
      instance = new PhotoSwipe({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
      Vue.nextTick(() => {
        instance.init(...args)
      })
    } else {
      instance.init(...args)
    }
  },
  push(...args) {
    if (!instance) {
      return this.preview(...args)
    }
    instance.push(...args)
  },
  close() {
    if (instance) {
      instance.close()
    }
  }
}
