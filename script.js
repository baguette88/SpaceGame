// var aliensLeft = 6
class Hero {
  constructor(name) {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7
  };
  heroAttack = (alien) => {
    var randomNumber = Math.random()
    if (randomNumber >= this.accuracy) {
      console.log(“Hero Attack has missed”);
      currentAlien.alienAttack(hero)
    } else {
      console.log(“Hero hit the target”);
      alien.hull -= this.firepower
    }
  }
}
class Alien {
  hull = Math.floor(Math.random() * 4) + 3;
  firepower = Math.floor(Math.random() * 3) + 2;
  accuracy = (Math.floor(Math.random() * 3) + 6).toFixed(1) / 10;
  alienAttack = (hero) => {
    var randomNumber = Math.random();
    if (randomNumber >= this.accuracy) {
      console.log(“Alien Attack has missed”);
      hero.heroAttack(currentAlien)
    } else {
      console.log(“Alien hit the Hero”);
      hero.hull -= this.firepower
    }
  }
}
class AlienFactory {
  constructor(alienName) {
    this.alienName = alienName;
    this.aliens = [];
  }
  generateAlien() {
    const newAlien = new Alien(this.alienName, this.aliens.length);
    this.aliens.push(newAlien);
  }
  findAlien(index) {
    return this.aliens[index];
  }
}
///////Battle starts here\\\\\\\
// cretae a hero
const hero = new Hero(“USS”)
// cretae all the alien ships
const alien = new AlienFactory(“Alien”)
for (let index = 0; index < 6; index++) {
  alien.generateAlien()
}
// console.log(alien.aliens); there are six aliens in the array of aliens to get one use this method ==> alien.findAlien(index)
var alienIndex = 0
var currentAlien = alien.findAlien(alienIndex)
var level = 1
const gameFuntions = {
  battle: (hero, alien) => {
    hero.heroAttack(alien);
    gameFuntions.checkBattleWinner()
    alien.alienAttack(hero)
    gameFuntions.checkBattleWinner()
  },
  checkBattleWinner: () => {
    if (hero.hull <= 0) {
      console.log(“I am checking heros hull “, hero.hull);
      console.log(“Hero lost the battle, game is over!“);
      return
    } else if (currentAlien.hull <= 0) {
      console.log(“I am checking aliens hull “, currentAlien.hull);
      console.log(“Alien lost this battle-” + level);
      if (level >= 6) {
        console.log(“Game is over, enemy has been defeated!“);
        gameFuntions.stopBattle()
      } else {
        var askInput = prompt(“Do you wanna retrieve or continue? r/c”)
        if (askInput == “c” && level < 6) {
          alienIndex++
          level++
          gameFuntions.battle(hero, currentAlien)
        } else if (askInput == “r”) {
          gameFuntions.stopBattle();
          level = 6
        } else {
          console.log(“put invalid answer--- put r or c”);
        }
      }
    }
  },
  stopBattle() {
    console.log(“The game is over”);
    return
  }
}
gameFuntions.battle(hero, currentAlien)
