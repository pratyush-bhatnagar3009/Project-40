class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.restart = createButton('Restart');
    this.pause = createButton('Pause')
    this.start = createButton('Start')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.pause.position(displayWidth-125,60);
    this.restart.position(displayWidth-125,20);
    this.start.position(displayWidth-125,90);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.restart.mousePressed(()=>{
      player.updateRestart();
    });

    this.pause.mousePressed(()=>{
     gameState=3;
    });

    this.start.mousePressed(()=>{
      gameState=4;
     });

  }
}
