// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {}
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    super.receiveDamage(damage);
    let choosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let choosenViking = Math.floor(Math.random() * this.vikingArmy.length);
    let result = choosenSaxon.receiveDamage(choosenViking.strength);
    if (choosenSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon != choosenSaxon);
    }
    return result;
  }
  saxonAttack() {}
  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
