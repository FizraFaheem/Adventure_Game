                                                // ADVENTURE GAME USING TYPESCRIPTT

// define class for the player
class Player {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    //Method to display player's status
    displayStatus() {
        console.log(`${this.name}'s Health: ${this.health}`);
    }
}
//Create an instance of the player
const player = new Player("Hero", 100);

//Function to simulate an adventure
function startAdventure() {

    console.log("Welcome to the Adventure Game!");

    //Dispaly palyers adventures
    player.displayStatus();
    console.log("You embark on a journey...");

    //Update player's health based on the adventure

    player.health -= 20;

    //Dispaly updated status
    player.displayStatus();
    console.log("You encountered a monster!");

    //Fight the monster
    player.health -= 30;

    //Dispaly final Status
    player.displayStatus();
    console.log("Game Over!");
}

//Start the Adventure Game
startAdventure();