class Character extends Animation {
  constructor(matriz, image, x, variationY, imageWidth, imageHeight, spriteWidth, spriteHeight, baseCollisionPolygon, collideMatriz) {
    super(matriz, image, x, variationY, imageWidth, imageHeight, spriteWidth, spriteHeight, baseCollisionPolygon)

    this.yInitial = height - this.imageHeight - variationY
    this.y = this.yInitial
    this.gravity = 3
    this.jumpSpeed = 0
    this.jumpHeight = -40
    this.jumps = 0
    this.invincible = false
    this.collideMatriz = collideMatriz
    this.characterMatriz = this.matriz
  }

  jump() {
    if (this.jumps < 2) {
      this.jumpSpeed = this.jumpHeight
      this.jumps++
    }
  }

  applyGravity() {
    this.y = this.y + this.jumpSpeed
    this.jumpSpeed = this.jumpSpeed + this.gravity

    if (this.y >= this.yInitial) {
      this.y = this.yInitial
      this.jumps = 0
    }
  }

  onFloor() {
    return this.y === this.yInitial;
  }

  stayInvincible() {
    this.invincible = true
    this.matriz = this.collideMatriz
    setTimeout(() => {
      this.matriz = this.characterMatriz
      this.invincible = false
    }, 1000)
  }

  collide(enemy) {
    if (this.invincible) {
      return false
    }

    const myCollisionPolygon = this.baseCollisionPolygon.map(v => createVector(v[0] + this.x, v[1] + this.y))
    const theirCollisionPolygon = enemy.baseCollisionPolygon.map(v => createVector(v[0] + enemy.x, v[1] + enemy.y))

    if (window.DEBUG_COLLISION) {
      collideDebug(true)
      noFill()

      stroke(0, 0, 255)
      beginShape()
      myCollisionPolygon.forEach(v => vertex(v.x, v.y))
      endShape(CLOSE);

      stroke(255, 0, 0)
      beginShape()
      theirCollisionPolygon.forEach(v => vertex(v.x, v.y))
      endShape(CLOSE);
    }
    const collision = collidePolyPoly(myCollisionPolygon, theirCollisionPolygon);
    return collision
  }
}