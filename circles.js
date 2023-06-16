class Circles {
    constructor(x, y){
        var options = {
            isStatic: false,
            friction: 0.5,
            restitution: 0.4
        }

        this.circle = Bodies.circle(x, y, Math.round(Math.random() * 70), options);
        World.add(world, this.circle);

        //make the array
        var rColor = Array.from(Array(255), (_, index) => index + 1);
        var gColor = Array.from(Array(255), (_, index) => index + 1);
        var bColor = Array.from(Array(255), (_, index) => index + 1);

        //choose a random index number of each array
        var rIndex = Math.round(Math.random() * rColor.length);
        var gIndex = Math.round(Math.random() * gColor.length);
        var bIndex = Math.round(Math.random() * bColor.length);

        //returning the colors
        var r = rColor[rIndex];
        var g = gColor[gIndex];
        var b = bColor[bIndex];

        fill(r, g, b);
    }

    show(){
        var x = this.circle.position.x;
        var y = this.circle.position.y;
        var r = this.circle.radius;

        circle(x, y, r)
    }
}