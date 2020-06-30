class Main {
  constructor() {
    this.index = 0
    this.enemiesMap = [...data.enemiesMap]
    this.gif = createImg('images/assets/espaço.gif', 'gif')
  }

  setup() {
    this.gif.addClass('gif')
    this.gif.position(100, 100)
    this.gif.center('horizontal')
    this.gif.hide()

    mainScreen = new Screen(backgroundMainNight, 4)

    life = new Life(data.life.maximum, data.life.initial)

    score = new Score()

    characterWalk = new Character(matrizCharacterWalk, imageCharacterWalk, 0, -25, 400, 400, 1000, 1000, collisionPolygonCharacterWalk, matrizWalkCollide);

    characterJump = new Character(matrizCharacterJump, imageCharacterJump, 0, -25, 400, 400, 1000, 1000, collisionPolygonCharacterJump, matrizJumpCollide);

    characterPositions.push(characterWalk)
    characterPositions.push(characterJump)

    const enemyBird = new Enemy(matrizEnemy1, imageEnemy1, width, 15, 624 * 0.2, 868 * 0.2, 624, 868, collisionPolygonEnemy1, 0, 750);

    const enemyWorm = new Enemy(matrizEnemy2, imageEnemy2, width, 300, 873 * 0.2, 125 * 0.2, 873, 125, collisionPolygonEnemy2, 0, 1650);

    const enemyBallSlow = new Enemy(matrizEnemy3, imageEnemy3, width, 15, 86, 86, 86, 86, collisionPolygonEnemy3, 15, 2200);
    
    const enemyBallFast = new Enemy(matrizEnemy3, imageEnemy3, width, 15, 86, 86, 86, 86, collisionPolygonEnemy3, 25, 1000);

    allEnemies.push(enemyBird)
    allEnemies.push(enemyWorm)
    allEnemies.push(enemyBallSlow)
    allEnemies.push(enemyBallFast)

  }

  keyPressed(key) {
    if (key === ' ' && currentScene === 'main') {
      this.gif.remove()
      if (characterJump.jumps < 2 && currentScene === 'main') {
        jumpSound.play();
      }
      characterPositions.map(character => character.jump())
    }
  }

  draw() {
    mainScreen.show();
    mainScreen.move();

    score.show();
    score.add();

    this.gif.show()

    if (parseInt(score.score) === 200) {
      mainScreen.image = backgroundMainDay
      allEnemies[1].speed = 13
    }
    
    if (parseInt(score.score) === 400) {
      mainScreen.image = backgroundMainSunset
      allEnemies[0].speed = 8
    }

    if (characterWalk.onFloor()) {
      characterWalk.show();
      characterWalk.applyGravity();
      indexCharacterPosition = 0
    } else {
      if (!characterJump.onFloor()) {
        characterWalk.applyGravity();
      }
      characterJump.show();
      characterJump.animate();
      characterJump.applyGravity();
      indexCharacterPosition = 1
    }

    const showEnemies = allEnemies.map(currentEnemy => {

      const visibleEnemy = currentEnemy.x < -currentEnemy.imageWidth;

      currentEnemy.show()
      currentEnemy.move()

      if (visibleEnemy) {
        currentEnemy.showAgain()
      }

      if (characterPositions[indexCharacterPosition].collide(currentEnemy)) {
        life.remove()
        characterPositions[indexCharacterPosition].stayInvincible()

        if (life.currentLife < 1) {
          image(imageGameOver, width / 2 - 350, height / 4, 1000 * 0.7, 238 * 0.7)
          this._restartButton()
          noLoop()
        }
      }
    })

    life.draw();
  }

  _restartButton() {
    this.restartButton = new Button('Restart', width / 2, height / 2, 'botao-reiniciar');

    this.restartButton.draw();
  }

  restart() {
    mainScreen.image = backgroundMainNight
    life.currentLife = data.life.initial;
    score.score = 0;
    allEnemies.map(enemy => enemy.x = width + enemy.delay)
    allEnemies[0].speed = 0
    allEnemies[1].speed = 0
    loop()
  }

}