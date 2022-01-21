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
  constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let chosenViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let result = chosenSaxon.receiveDamage(chosenViking.strength);
    if (chosenSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon !== chosenSaxon);
    }
    return result;
  }
  saxonAttack() {
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let chosenViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let result = chosenViking.receiveDamage(chosenSaxon.strength);
    if (chosenViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter((viking) => viking !== chosenViking);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
