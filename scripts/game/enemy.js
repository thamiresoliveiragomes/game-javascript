class Enemy extends Animation {
  constructor(matriz, image, x, variationY, imageWidth, imageHeight, spriteWidth, spriteHeight, baseCollisionPolygon, speed, delay) {
    super(matriz, image, x, variationY, imageWidth, imageHeight, spriteWidth, spriteHeight, baseCollisionPolygon)

    this.speed = speed
    this.delay = delay
    this.x = width + this.delay
  }

  move() {
    this.x = this.x - this.speed

  }

  showAgain() {
    if (this.x < -this.imageWidth - this.delay) {
      this.x = width
    }
  }

}