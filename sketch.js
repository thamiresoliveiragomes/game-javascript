function setup() {
  createCanvas(windowWidth, windowHeight)
  
  window.DEBUG_COLLISION = false; 
  
  frameRate(40);
  gameMusic.loop()
  gameMusic.setVolume(0.3)
  
  home = new Home()
  home.setup()
  
  main = new Main()
  main.setup()
  
  allScenes = {
    main,
    home
  }

}

function keyPressed() {
  main.keyPressed(key)
}

function draw() {
  allScenes[currentScene].draw();
}
