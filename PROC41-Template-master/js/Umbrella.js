class Umbrella{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.image = loadImage("../PROC41-Template-master/images/Walking Frame/walking_1.png");
        this.body = Bodies.circle(this.x, this.y, 300);
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, this.x, this.y, 300, 300);
    }
}