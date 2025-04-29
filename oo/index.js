// machine is a base classs it doesnt extend anything. It is the base
class machine {
    weight;
    location; // coords can also be called location 
    element;
    color;
    // The constructor is the funtion/method that runs when we create an istance of class
    constructor(in_weight = 100, x_coord = 10, y_coord = 10, color = "green", angle = 0) {
        console.log("Creating machine with weight of " + in_weight + "pounds");
        console.log("oh, and its has coords of " + [x_coord, y_coord]);
        this.weight = in_weight
        this.location = [x_coord, y_coord];
        this.color = color;
        this.element = null;
        this.angle = 0;
    }
//This method is responsible for creating our associated HTML element
render () {
    //If an element already exists, no work to do--jsut return!
if ( this.element ){
    return;
}
//create our new element
this.element = document.createElement("div");
this.element.style.backgroundColor = this.color;
this.element.style.width = "30px";
this.element.style.height = "10px";
this.element.style.trnasform = "rotate(" + this.angle + "rad)";
//Place our element on the page itself
document.body.appendChild(this.element);
}

} 

 

class automobile extends machine {
    fuel;
    moveSpeed;
    constructor(in_fuel = 1, in_weight = 2_000, moveSpeed = 10) {
        super( in_weight);
        console.log("you've created an automoblie with a tank that is " + in_fuel + "% full ");
        this.fuel = in_fuel;
        this.moveSpeed = this.moveSpeed;
    }
}
// a tank is a special type of automobile taht inherits all properties of an automoblie by virtue of extending that class
 class Tank extends automobile {
    weight 
    fuel 
    constructor (rounds = 1000, color = "green") {
        super(1,10_000, color);
        this.rounds = rounds;
        console.log("Your tank is alive");
    }
 }
 const armytank = new Tank( 1_000, "green");
 armytank.render();
    // const vehicle = new automobile( 0.5 );
    // const faxmachine = new machine(500, 50, 32);
    
