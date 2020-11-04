class Mango
{
    constructor(x,y,radius)
{
    var options=
    {
        isStatic:false,
        restitution:0,
        friction:1
    }
    this.mango=Bodies.circle(x,y,radius,radius,options);
    this.radius=radius;
    this.image=loadImage("FRUITS/mango.png");
    World.add(world,this.mango);

}
display()
{
  image(this.image,this.body.mango.position.x,this.body.mango.position.y,200,400);
}
}

