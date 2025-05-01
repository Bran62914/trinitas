import Tank from "./classes/Tank.js";

const armyTank = new Tank({ rounds: 5, color: "green"  });
const pinkTank = new Tank({ color: "pink" });

armyTank.render();
// const vehicle = new Automobile( 0.5 );
// const faxMachine = new Machine(500, 50, 32);

function setupkeyBinding () {

    function handleKeyUp(event) {

    }

    function handleKeyDown(event) {
        console.log(event.code);
        if (event.code == "KeyW") {
            armyTank.driveForward();
            armyTank.update();
            console.log(armyTank.location.x);
        }
    }

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
}

setupkeyBinding();