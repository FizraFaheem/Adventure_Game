// import inquirer from "inquirer"
// class Player{
//     name:string;
//     fuel:number=100;
//     constructor(name:string){
//         this.name = name;
//     }
// }
// class Opponent{
//     name:string;
//     fuel:number=100;
//     constructor(name:string){
//         this.name = name;
//     }
// }
// let player = await inquirer.prompt([
//     {
//         name :"name",
//         type :"input",
//         message: "Please Enter Your Name:"
//     }
// ])
// let opponent = await inquirer.prompt([
//     {
//         name :"select",
//         type :"list",
//         message :"Select Year Opponent",
//         choices :["ske"]
//     }
// ])
class Player {
    name;
    health;
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    displayStatus() {
        console.log(`${this.name}'s Health: ${this.health}`);
    }
}
const player = new Player("Hero", 100);
function startAdventure() {
    console.log("Welcome to the Adventure Game!");
    player.displayStatus();
    console.log("You embark on a journey...");
    player.health -= 20;
    player.displayStatus();
    console.log("You encountered a monster!");
    player.health -= 30;
    player.displayStatus();
    console.log("Game Over!");
}
startAdventure();
export {};
