class Ground{
    constructor(){
        var options ={
            isStatic : true
        }
        this.ground = Bodies.rectangle(450,390,1000,20,options);
        
       World.add(world,this.ground);

    }
    display(){
        strokeWeight(2);
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
        
    }
}