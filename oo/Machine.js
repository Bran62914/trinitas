// machine is a base classs it doesnt extend anything. It is the base
export default class Machine {
    weight;
    location; // coords can also be called location 
    element;
    color;
    // The constructor is the funtion/method that runs when we create an istance of class
    constructor(in_weight = 100, x_coord = 10, y_coord = 10, color = "green", angle = 0) {

        const defaults = {
            weight:1,
            location: { x: 0, y: 0},
            element: null,
            color:"gray",
            angle:0,
        };
        console.log("Creating machine with weight of " + in_weight + "pounds");
        console.log("oh, and its has coords of " + [x_coord, y_coord]);
        this.weight = opts.weight;
        this.location = opts.location;
        this.color = opts.color;
        this.element = opts.element;
        this.angle = opts.angle;
    }
//This method is responsible for creating our associated HTML element
render() {
    //If an element already exists, no work to do--jsut return!
if ( this.element )return;

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