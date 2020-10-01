

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
    }
  }

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
    }


  function decideFate(){
      if (alen.hull <= 0){
        alert("Choose whether to continue or retreat")
        //Buttons appear?
        console.log("Choose between Retreat and Next Battle")
      }
      prompt("continue to next battle")
      if (input == "continue"){
        battle()  //Do we need function to start new battle?
      }
      else if (input == "retreat") {
      gameOver()} //DEFINE THIS FUNCTION
      else {
        alert("please input retreat or continue")
      }
  }

function gameOver() {
  if (aliensLeft <= 0){
  console.log("PLAYER WINS")}
  //WIN CONDITION
  if (hero.hull <= 0){
    console.log("Game OVER YOU LOSE!")
}
}



    const Player = new Hero()    // CREATE HERO
    //******* */
      const alien = new Alien(    // CREATE ALIEN   (CHANGE INTO FACTORY FUNCTION)
        // hull = this.Alien.hull,
        // firepower = this.Alien.firepower,
        // accuracy = this.Alien.accuracy
      )

      ///DECLARE BATTLE
function playGame(){

  if (Player.hull && aliensLeft > 0){
    battle()
    playGame()
  }
} //Link Button
   
  function battle(){
    console.log("battle has started")
      //BATTLE FUNCTION
      // hero attacks
      // then alien attacks
      console.log(Player.hull)
      while (Player.hull >= 0 && aliensLeft >= 0) {
        console.log("loop has started");
      Player.heroFight(alien)
      alien.announceHealth()
      checkWin()
      alienFight()
      isGameOver()
      hero.announceHealth()
      checkWin() //FOR BATTLES (small fight)
      isGameOver() //End entire game
      }
      decideFate(input) //retreat or continue
     //  if () ***
       //  if neither are at 0, repeat
    }
 
  function talk () {
      const sayThis = this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]
      console.log(sayThis)
    }
  battle()
  //INITIATE BATTLE WITH BUTTON