class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      
         packageSprite=createSprite(width/2, 180, 10,10,options);
         packageSprite.addImage(packageIMG)
         packageSprite.scale=0.2
         World.add(world,packageSprite);
         packageSprite.velocityY=10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      pop();
    }
  };