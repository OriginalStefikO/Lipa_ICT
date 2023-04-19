export class Weapon {
   constructor(name, type, strength, manaCost) {
      this.name = name
      this.type = type
      this.strength = strength
      this.manaCost = manaCost
   }

   toString() {
      return `${this.name} (${this.type}) \n{strength: ${this.strength}, mana cost: ${this.manaCost}}`
   }
}