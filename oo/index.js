import Tank from "./classes/Tank.js";

const armyTank = new Tank({ rounds: 5, color: "green" });
const pinkTank = new Tank({ color: "pink" });

armyTank.render();

const pressedKeys = {
    "KeyA": false,
    "KeyS": false,
    "KeyD": false,
    "KeyW": false,
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
};

function update() {
    //if the user is pressing W or arrowup 
    if (pressedKeys.KeyW || pressedKeys.ArrowUp) {
        armyTank.driveForward();
    } else if (pressedKeys.KeyS || pressedKeys.ArrowDown) {
        armyTank.driveBackward();
    }

    //if the user is pressing W or arrowup 
    if (pressedKeys.KeyA || pressedKeys.ArrowLeft) {
        armyTank.turnLeft();
    } else if (pressedKeys.KeyD || pressedKeys.ArrowRight) {
        armyTank.turnRight();
    }

    armyTank.update();

    requestAnimationFrame(update);
}

update();

document.addEventListener("keydown", (event) => {
    if (event.code in pressedKeys) {
        pressedKeys[event.code] = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code in pressedKeys) {
        pressedKeys[event.code] = false;
    }
});