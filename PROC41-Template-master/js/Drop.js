class Drop{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 3, options);
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }

    display(){
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 3, 3);
    }
}