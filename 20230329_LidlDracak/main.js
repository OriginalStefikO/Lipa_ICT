import { Character } from "./Character.js";
import { Weapon } from "./Weapon.js";

const player = new Character("Hrac", 100, 100, 5);
const monster = new Character("Monster", 60, 50, 10);

const weapons = [
    new Weapon("Sword", 10, 0),
    new Weapon("Magic Sword", 15, 10)
];

player.learnAttack(weapons[1]);
console.log(player)

