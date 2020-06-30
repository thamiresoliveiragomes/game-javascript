class Button {
  constructor(text, positionX, positionY, cssClass) {
    this.text = text
    this.positionX = positionX
    this.positionY = positionY
    this.cssClass = cssClass
    this.button = createButton(this.text)
    this.button.addClass(this.cssClass)

    if (currentScene === 'home') {
      this.button.mousePressed(() => this._startGame());
    }

    if (currentScene === 'main') {
      this.button.mousePressed(() => this._restartStage());
    }
  }

  setup() {
    this.newScreen.draw()
  }

  draw() {
    this.button.position(this.positionX, this.positionY)
    this.button.center('horizontal')
  }

  _startGame() {
    this.button.remove();
    currentScene = 'main'
  }

  _restartStage() {
    this.button.remove();
    main.restart();
  }
}