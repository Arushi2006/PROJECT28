class Stone
{
    constructor(x,y,width,height)
    {
    var options=
    {
       isStatic:false,
       restitutuion:0,
       friction:1,
       density:1.2
    }
   
    this.stone=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("FRUITS/stone.png");
    World.add(world,this.stone);
    }
display()
{
image(this.image,this.stone.position.x,this.stone.position.y,this.width,this.height);
}
}
