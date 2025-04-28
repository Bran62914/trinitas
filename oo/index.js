// machine is a base classs it doesnt extend anything. It is the base
class machine {
    weight;
    coords = [0, 0];
    constructor(in_weight = 100, x_coord = 10, y_coord = 10) {
        console.log("Creating machine with weight of " + in_weight + "pounds");
        console.log("oh, and its has coords of " + [x_coord, y_coord]);
        this.weight = in_weight
        this.coords = [x_coord, y_coord];
    }
}

 

class automobile extends machine {
    constructor(in_fuel, in_weight = 2_000) {
        super( in_weight);
        console.log("you've created an automoblie with a tank that is " + in_fuel + "% full ");
        this.fuel = in_fuel;
    }
}
// a tank is a special type
 class Tank extends automobile {
    weight 
    fuel 
    constructor (color) {
        super(1,10_000);
        this.color = color;
        console.log("Your tank is alive");
    }
 }
    const vehicle = new automobile( 0.5 );
    const faxmachine = new machine(500, 50, 32);
    const armytank = new Tank("green");

