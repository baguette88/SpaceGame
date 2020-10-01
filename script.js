
// var aliensLeft = 6

<<<<<<< HEAD
//DIFFERENT ATTACKS
//EXTRA LIVES
//linking HTML

let earth
let space
let aliensLeft = 6
class Hero {
    constructor(hull, firepower, accuracy) {
        this.hull = 20;  //JS ERROR
        this.firepower = 5;
        this.accuracy = .7;
    }
    announceHealth() {
        console.log(`${this.name} says: You can’t bring me down! I’m ${this.hull} hitpoints strong!`) //FUNCTIONS: FIGHT, RANDOM, TALK, (ADD HEAL?)
    }
    heroFight(alien) {
        while ((alien.hull > 0 || this.hull > 0) && aliensLeft>0) {
          console.log("heroFightLoop executed")
            if (Math.random() < this.accuracy) {
               console.log("its a hit");
                 alien.hull -= this.firepower;
            } else {console.log("it's a miss")} //OUTPUT MISS
            }
        };
      alienFight(hero){
         while (alien.hull >= 0 || this.hull >= 0) {
            if (Math.randon() < alien.accuracy){
               console.log("alien hits human")
               this.hull -=alien.firepower
            }else{
              console.log("alien has missed");
            }
          }
        };
        checkWin(){
          if(this.hull<=0){
            console.log(`${this.name} lost the battle`);
          }
          if(this.Alien.hull<=0)
           aliensLeft = aliensLeft - 1
           console.log("ALien Killed!")
        }
    
     randomNumGenerator(arr) {
        return Math.floor(Math.random() * 1);
    }
     talk() {
        const sayThis = this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]
        console.log(sayThis);
=======
class Hero {
  constructor(name) {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7
  };
  heroAttack = (alien) => {
    var randomNumber = Math.random()
    if (randomNumber >= this.accuracy) {
      console.log("Hero Attack has missed");
    } else {
      console.log("Hero hit the target");

      alien.aliens[0].hull -= this.firepower
>>>>>>> 2cab7426f345d12fdc9184271ccff577ff10cd98
    }
  }
}

<<<<<<< HEAD
  class Alien {
    // constructor (name, firepower, accuracy, health = 100, battlecry) { //HERO CLASS
        hull = Math.floor(Math.random()*4)+3;   //RANDOMIZE
        firepower = Math.floor(Math.random() *3) +2;  //RANDOMIZE
        accuracy = (Math.floor(Math.random() *3) + 6).toFixed(1)/10;    //RANDOMIZE
    announceHealth () {
      console.log(`${this.name} says: SDEFSDEF! ${this.health} HP FEWSSEFSEF!`) //FUNCTIONS: FIGHT, RANDOM, TALK, (ADD HEAL?)
    }}
  class AlienFactory {
      constructor(alienName) {
        this.alienName = alienName;
        this.aliens = [];
      }
      generateAlien() {  //DO THIS SIX TIMES
        const newAlien = new Alien(this.company, this.aliens.length);
        this.aliens.push(newAlien);
     //   aliensLeft = aliensLeft - 1
      }
      findAlien(index) {
        return this.aliens[index];
      }
=======
class Alien {
  hull = Math.floor(Math.random() * 4) + 3;
  firepower = Math.floor(Math.random() * 3) + 2;
  accuracy = (Math.floor(Math.random() * 3) + 6).toFixed(1) / 10;

  alienAttack = (hero) => {
    var randomNumber = Math.random();
    if (randomNumber >= this.accuracy) {
      console.log("Alien Attack has missed");
    } else {
      console.log("Alien hit the Hero");
      hero.hull -= this.firepower
>>>>>>> 2cab7426f345d12fdc9184271ccff577ff10cd98
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
const hero = new Hero("USS")

// cretae all the alien ships
const alien = new AlienFactory("Alien")
for (let index = 0; index < 6; index++) {
  alien.generateAlien()
}

// console.log(alien.aliens); there are six aliens in the array of aliens to get one use this method ==> alien.findAlien(index)
var alienIndex = 0
var currentAlien = alien.findAlien(alienIndex)



const gameFuntions = {
  battle: (hero, alien) => {

    while (hero.hull != 0 || currentAlien) {
      hero.heroAttack(currentAlien)
      alien.alienAttack(hero)
    }
  },
  checkBattleWinner: () => {
    if (hero.hull == 0) {
      console.log("Hero lost the battle, game is over!");
      return
    } else if (alien.hull == 0) {
      console.log("Alien lost this battle");
      var askInput = prompt("Do you wanna retrieve or continue? r/c")
      if (askInput == "c") {
        alienIndex++
        gameFuntions.battle(hero, alien)
      } else if (askInput == "r") {
        console.log("You have lost the game.");
      } else {
        console.log("put invalid answer--- put r or c");
      }
    }
  }
}


// console.log(alien.aliens[0])


while (hero.hull >= 0 || alien.findAlien(currentAlien).hull >= 0) {
  hero.heroAttack(currentAlien)
  console.log(hero.hull);
  console.log(currentAlien.hull);
  alien.aliens[0].alienAttack(hero)
  gameFuntions.checkBattleWinner();
}
