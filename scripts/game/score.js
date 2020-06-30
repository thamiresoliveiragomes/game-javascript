class Score {
  constructor() {
    this.score = 0
  }

  show() {
    textFont(fontZelda)
    textAlign(RIGHT)
    fill('#fff')
    textSize(55)
    text(parseInt(this.score), width - 30, 60)
  }

  add() {
    this.score = this.score + 0.1
  }
}