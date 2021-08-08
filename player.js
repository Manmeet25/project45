class Player
{
constructor(x,y)
{
var options=
{
    restitution:0.8,
    friction:2.2,
    density:1.5
}
this.body= Bodies.rectangle(x,y,80,100,options);
this.width=80;
this.height=100;
this.image = loadImage("images/smr.png")
World.add(world, this.body);
}

display()
{ 
    var pos= this.body.position;
    
    var angle= this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("red")
    fill ("red");
    image(this.image,0,0, this.width, this.height);
    pop();
}

}