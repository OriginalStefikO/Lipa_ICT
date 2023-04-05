export class Character {
    constructor(name, health, mana, strength) {
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        
        this.attacks = [];
    }

    learnAttack(attack) {
        this.attacks.push(attack);
    }

    
}