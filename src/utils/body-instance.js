import { createApp } from 'vue'

export default class BodyInstance {
  constructor(Instance) {
    this._Instance = Instance

    this.app = ''
  }

  show(...args) {
    if (!this.app) {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const app = createApp(this._Instance)
      this.app = app.mount(div)
    }
    this.app.visible = true
    this.app.show && this.app.show(args)
  }

  hide(...args) {
    this.app.visible = false
    this.app.hide && this.app.hide(args)
  }
}
