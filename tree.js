class Tree
{
    constructor(x,y,width,height)
    {
    var options=
    {
       isStatic:true
    }
   
    this.tree=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("tree.png");
    World.add(world,this.tree);
    }
display()
{
image(this.image,this.tree.position.x,this.tree.position.y,this.width,this.height);
}
}


