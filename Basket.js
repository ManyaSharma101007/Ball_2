class Basket  {
    constructor(x,y,width,height) {
        var option = {
            isStatic : true
          }
        
          this.body = Bodies.rectangle(x,y,width,height,option);
          this.width = width;
          this.height = height;
          this.image = loadImage("dustbin_2.png");
          World.add(world,this.body);
    }

    display() {
        
        fill("red");
        noStroke();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y - 70,this.width,150);

    }
}