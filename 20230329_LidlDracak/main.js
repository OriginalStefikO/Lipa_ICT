import { Character } from "./Character.js";
import { Weapon } from "./Weapon.js";

const player = new Character("Hrac", 100, 100, 5);
const monster = new Character("Monster", 60, 50);

const weapons = {
   "Sword": new Weapon("Sword", "weapon", 10, 0),
   "Magic Sword": new Weapon("Magic Sword", "weapon", 15, 10),
   "Healing Wand": new Weapon("Healing Wand", "heal", 0, 10)
}

const mainButton = document.querySelector("#mainButton");
mainButton.addEventListener("click", gameStart);

function gameStart() {
    console.log("Game started");

    const inputs = document.querySelectorAll("input");
    const jmeno = inputs[0].value;
    const zivoty = inputs[1].value;
    const mana = inputs[2].value;
    const sila = inputs[3].value;

    const player = new Character(jmeno, zivoty, mana, sila);
    console.log(player.toString());

    // create element with inputs based on weapons
    const weaponDiv = document.querySelector("#weaponDiv");
    for (const weapon in weapons) {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "weapon";
        input.value = weapon;
        weaponDiv.appendChild(input);

        const label = document.createElement("label");
        label.innerHTML = weapon;
        weaponDiv.appendChild(label);
    }
}
// player.learnWeapon(weapons["Sword"]);
// console.log(player.toString())
// player.attack(monster, weapons["Sword"]);


// console.log(monster.toString())

// console.log(weapons["Sword"].toString())

