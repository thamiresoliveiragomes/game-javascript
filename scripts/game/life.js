class Life {
  constructor(total, initial) {
    this.total = total
    this.initial = initial
    this.currentLife = this.initial
    this.width = 35
    this.height = 35
    this.xInitial = 20
    this.y = 20
  }

  draw() {
    for (let i = 0; i < this.currentLife; i++) {
      const margin = i * 20
      const position = this.xInitial * (1 + i)
      image(imageLife, position + margin, this.y, this.width, this.height)
    }
  }


  add() {
    if (this.currentLife < this.total) {
      this.currentLife++
    }
  }

  remove() {
    this.currentLife--
  }

}