class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("frnds1.png");
    this.image1 = loadImage("smoke.png");
    this.trajectory = [];
  }



  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var position = [this.body.position.x,this.body.position.y];

    this.trajectory.push(position);

    console.log(this.body.velocity.x);

    if(this.body.velocity.x > 15 && this.body.position.x > 210){
    for(var i = 0; i<this.trajectory.length; i++){

     image(this.image1,this.trajectory[i][0],this.trajectory[i][1]);

    }
  }

    super.display();
  }
}
