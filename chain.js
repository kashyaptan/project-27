class chain {
    constructor(a, b, c ,d){

        this.c = c
        this.d = d
        var options ={
            bodyA: a,
            bodyB: b,
            length: 200,
            stiffness: 0.1,
            pointB:{x:this.c, y:this.d}
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world, this.chain)
    }
    
    display(){
        var bodya = this.chain.bodyA.position
        var bodyb = this.chain.bodyB.position
        var anchor = bodyb.x+this.c
        var anchor2 = bodyb.y+this.d
        line(bodya.x, bodya.y, anchor, anchor2)
    }
}
