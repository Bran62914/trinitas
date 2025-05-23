import Machine from "./Machine.js";

export default class Automobile extends Machine {
    fuel;
    moveSpeed;
    turnSpeed;

    constructor(options = {}) {
        const defaults = {
            fuel: 100,
            moveSpeed: 10,
            turnSpeed: .15,
        };

        const opts = { ...defaults, ...options };

        super(opts);

        this.fuel = opts.fuel;
        this.moveSpeed = opts.moveSpeed;
        this.turnSpeed = opts.turnSpeed;
    }

    driveForward() {
        const newX = this.location.x + Math.cos(this.angle) * this.moveSpeed;
        const newY = this.location.y + Math.sin(this.angle) * this.moveSpeed;

        this.location.x = Math.max( 0, Math.min( innerWidth, newX))
        this.location.y = Math.max( 0, Math.min( innerHeight, newY))
    }

    driveBackward() {
         const newX = this.location.x - Math.cos(this.angle) * this.moveSpeed;
         const newY = this.location.y - Math.sin(this.angle) * this.moveSpeed;

        this.location.x = Math.max( 0, Math.min( innerWidth, newX))
        this.location.y = Math.max( 0, Math.min( innerHeight, newY))
        
    }

    turnLeft() {
        this.angle = this.angle - this.turnSpeed;
    }

    turnRight() {
        this.angle = this.angle + this.turnSpeed;
     }
}

