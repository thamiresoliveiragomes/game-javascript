class Animation {
  constructor(matriz, image, x, variationY, imageWidth, imageHeight, spriteWidth, spriteHeight, baseCollisionPolygon) {
    this.matriz = matriz
    this.image = image
    this.imageWidth = imageWidth
    this.imageHeight = imageHeight
    this.x = x
    this.variationY = variationY
    this.y = height - this.imageHeight - variationY
    this.spriteWidth = spriteWidth
    this.spriteHeight = spriteHeight
    this.baseCollisionPolygon = baseCollisionPolygon
    this.currentFrame = 0
  }

  show() {
    image(this.image, this.x, this.y, this.imageWidth, this.imageHeight, this.matriz[this.currentFrame][0], this.matriz[this.currentFrame][1], this.spriteWidth, this.spriteHeight)

    this.animate()
  }

  animate() {
    this.currentFrame++;

    if (this.currentFrame === this.matriz.length) {

      this.currentFrame = 0;
    }
  }
}