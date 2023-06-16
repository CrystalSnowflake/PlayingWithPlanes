class Platform{
    constructor(x, y, w, h, a){
        var options = {
            isStatic: true,
            friction: 0.8,
            restitution: 0.1,
            angle: a
        }

        var w = this.w;
        var h = this.h;
        var a = this.angle

        this.platform = Bodies.rectangle(x, y, w, h, a, options);
        World.add(world, this.platform);
        rectMode(CENTER)

        fill("white")
    }

    show(){
        var x = this.platform.position.x;
        var y = this.platform.position.y;
        var w = this.platform.width;
        var h = this.platform.hieght;
        var a = this.platform.angle;
       
        fill("white")
        rect(x, y, w, h, a);
        
    }   
}