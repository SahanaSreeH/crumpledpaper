class Paper {
constructor(){

 var options = {
     isStatic : false,
     restitution :0.3,
     friction : 0.5,
     density : 1.2
 }   
 this.body = Bodies.rectangle(200,300);
 this.width = 40;
 World.add(world,this.body);
 this.image = loadImage("paper.png");
}

display(){
    var angle = this.body.angle;
    var position = this.body.position;

    fill("white");
    rotate(angle);
    imageMode(CENTER);
    image(this.image.pos.x,pos.y,40,40); 
}
}