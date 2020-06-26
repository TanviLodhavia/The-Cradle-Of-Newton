class Bob {
    constructor(x,y){
        var options = {
            isStatic:true,
            'restitution':0.4,
            'friction':0.3,
            'density':2
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius=35;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        strokeWeight(0)
        fill(164,158,200);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
        
    }
}