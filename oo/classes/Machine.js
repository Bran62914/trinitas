// Machine is the base class; it doesn't extend anything.
export default class Machine {
    weight;
    location; // coords can also be called location 
    element;
    color;
    angle;

    // The constructor is the function/method that runs when we create an instance of a class
    constructor(options = {}) {

        const defaults = {
            weight: 1,
            location: { x: 0, y: 0 },
            element: null,
            color: "gray",
            angle: 0,
        };

        const opts = { ...defaults, ...options };

        this.weight = opts.weight;
        this.location = opts.location;
        this.element = opts.element;
        this.color = opts.color;
        this.angle = opts.angle;
    }

    // This method is responsible for creating our associated HTML element
    render() {
        // If an element already exists, no work to do--just return!
        if (this.element) return;

        //create our new element
        this.element = document.createElement("div");
        this.element.style.backgroundColor = this.color;
        this.element.style.width = "30px";
        this.element.style.height = "10px";
        this.element.style.transform = "rotate(" + this.angle + "rad)";
        this.element.style.position = "absolute";

        // Place our element on the page itself
        document.body.appendChild(this.element);
    }


    update () {
        this.element.style.left = this.location.x + "px";
    } 
} 