function getSize(src) {
  return new Promise(resolve => {
    const img = new Image()
    img.src = src
    img.onload = function() {
      resolve({
        w: this.width,
        h: this.height
      })
    }

    img.onerror = () => resolve({ w: 1, h: 1 })
  })
}

export default async (images = []) => {
  const data = []
  for (let i = 0; i < images.length; i++) {
    const img = images[i]
    if (typeof img === 'string') {
      const { w, h } = await getSize(img.src)
      data.push({
        src: img,
        h,
        w
      })
      continue
    }
    if (!img.w || !img.h) {
      const { w, h } = await getSize(img.src)
      img.w = w
      img.h = h
      data.push(img)
      continue
    }
    data.push(img)
  }
  return data
}
