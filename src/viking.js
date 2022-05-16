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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health === 0 || this.health < 0) {
      return `${this.name} has died in act of combat`;
    } else if (this.health === 1 || this.health > 1) {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health === 0 || this.health < 0) {
      return `A Saxon has died in combat`;
    } else if (this.health === 1 || this.health > 1) {
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonSelect = this.saxonArmy[saxonIndex];
    let vikingSelect = this.vikingArmy[vikingIndex];
    // let damage = vikingSelect.attack();
    saxonSelect.receiveDamage(vikingSelect.attack());
    if (saxonSelect.health === 1 || saxonSelect.health > 1) {
      return saxonSelect.receiveDamage(damage);
    }
    if (saxonSelect.health === 0 || saxonSelect.health < 0) {
      this.saxonArmy.splice(saxonIndex, 1);
      return 'A Saxon has died in combat';
    }
  }
  saxonAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonSelect = this.saxonArmy[saxonIndex];
    let vikingSelect = this.vikingArmy[vikingIndex];
    let damage = saxonSelect.attack();
    vikingSelect.receiveDamage(damage);
    if (vikingSelect.health === 1 || vikingSelect.health > 1) {
      return saxonSelect.receiveDamage(damage);
    }
    if (vikingSelect.health === 0 || vikingSelect.health < 0) {
      this.vikingArmy.splice(vikingIndex, 1);
      return `${vikingSelect.name} has received ${damage} points of damage`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
