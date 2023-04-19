export class Character {
   constructor(name, health, mana, strength=0) {
      this.name = name;
      this.health = health;
      this.mana = mana;
      this.strength = strength;

      this.attacks = [];
   }

   learnWeapon(attack) {
      this.attacks.push(attack);
   }

   attack(target, weapon) {
      if (weapon.type === "weapon") {
         target.health -= weapon.strength + this.strength;
         this.mana -= weapon.manaCost;
      } else if (weapon.type === "heal") {
         target.health += weapon.strength + this.strength;
         this.mana += weapon.manaCost;
      }
   }

   toString() {
      return `${this.name} \n(Health: ${this.health}, Mana: ${this.mana}, Strength: ${this.strength})`
   }
}