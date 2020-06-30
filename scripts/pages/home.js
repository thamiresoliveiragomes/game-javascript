class Home {
  constructor() {}

  setup() {
    homeScreen = new Screen(backgroundHome, 0);
    startButton = new Button('Start', width / 2, height / 1.575, 'botao-tela-inicial')

    // video = createVideo('imagens/cenario/video.mp4');
    // video.hide()
    // cenario1 = new Cenario(video, 0)
    // video.loop()

  }

  draw() {
    homeScreen.show()
    // cenario1.move()
    this._button() 
    // this._text()
    // video.loop()
    // video.noLoop()

  }

  _text(){
    textFont(fontZelda)
    textAlign(CENTER)
    textSize(50)
    fill('#fff')
    text('Fase 2', width/2, height/1.13)
  }

  _button() {
    startButton.draw()
  }
}