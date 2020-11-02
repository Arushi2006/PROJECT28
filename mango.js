class Mango
{
    constructor(x,y,radius)
{
    var options=
    {
        isStatic=false,
        restitution:0,
        friction:1
    }
    this.mango=Bodies.circle(x,y,radius,radius,options);
    this.radius=radius;
    this.image=loadImage("mango.png");
    World.add(world,this.mango);

}
}
