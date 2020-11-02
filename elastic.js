class Elastic
{
    constructor(body1,body2)
    {
      var options=
      {
        bodyA:body1,
        bodyB:body2,
        stiffness:0.04,
        length:10
      }
      this.bodyB=bodyB;
      this.elastic=Constraint.create (options);
      World.add(world,this.elastic);
    }
    fly()
    {
      this.elastic.bodyA=null;
    }
    attach()
    {
        this.elastic.bodyA=null;
    }
    display()
    {
      
        if(this.elastic.bodyA)
        { 
        var pointA=this.elastic.bodyA.position;
        var bodyB=this.bodyB;
        push();
        stroke(61,29,12);
        strokeWeight(10);
        line(bodyA.x-25,bodyA.y,bodyB.x-10,bodyB.y);
        line(bodyA.x-25,bodyA.y,bodyB.x+30,bodyB.y-3);
        pop();
    }
  }
}