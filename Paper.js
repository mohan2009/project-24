class Paper{
	 constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        ellipseMode(RADIUS)
      fill(255)
      ellipse(this.body.position.x,this.body.position.y,this.radius)

      }
}