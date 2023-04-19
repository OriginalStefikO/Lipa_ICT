import { Character } from "./Character.js";
import { Weapon } from "./Weapon.js";

const player = new Character("Hrac", 100, 100, 5);
const monster = new Character("Monster", 60, 50);

const weapons = {
   "Sword": new Weapon("Sword", "weapon", 10, 0),
   "Magic Sword": new Weapon("Magic Sword", "weapon", 15, 10),
   "Healing Wand": new Weapon("Healing Wand", "heal", 0, 10)
}

// player.learnWeapon(weapons["Sword"]);
// console.log(player.toString())
// player.attack(monster, weapons["Sword"]);


// console.log(monster.toString())

// console.log(weapons["Sword"].toString())

