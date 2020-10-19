class Rope {
    constructor(body1,body2){
        var options={
            length:50,
            bodyA:body1,
            bodyB:body2,
            stiffness:0.05

        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posa=this.chain.bodyA.position;
        var posb=this.chain.bodyB.position;
        strokeWeight(4);
        line (posa.x,posa.y,posb.x,posb.y);
    }  
    
}