class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }



    car1 = createSprite(100,200);
    car1.addImage("c",car1image) 
    car2 = createSprite(300,200);
    car2.addImage("c",car2image) 
    car3 = createSprite(500,200);
    car3.addImage("c",car3image) 
    car4 = createSprite(700,200);
    car4.addImage("c",car4image) 
    cars = [car1, car2, car3, car4];

  }
  
  stop() {
    console.log("stop called");
  }
  
  spawnHurdle(x,y) {
  
  //write code here to spawn the masks
    hurdle =  createSprite(x,y);
    hurdle.addImage("c",hurdleimage) 
    hurdle.scale = 0.5;
    hurdle.lifetime = 300;
    
    //add each cloud to the group
    hurdleGroup.add(hurdle);
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      background("#c68767")
      image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)

      //index of the array
      var index = 0;

      if (index === player.index){
        stroke(10);
        fill("red");
        ellipse(x,y,60,60);
        cars[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
      }

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //this. spawnHurdle(x-25,100);
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if(hurdleGroup.isTouching( cars[index-1])) {
          console.log("state : " + ayayayayayayy);
          gameState=3;
        }

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }


    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      
      player.update();
    }
    if(player.distance>3860){
      gameState=2;
    }
    drawSprites();

  }
  end(){
    console.log("gameened")
    game.update(2);
  }
}
