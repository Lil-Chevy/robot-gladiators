// random numbers.
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
}

// fight function (now with parameter for enemy's name)
var fight = function(enemy)  {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0,enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyInfo variable
   var damage = randomNumber(enemy.attack - 3, enemy.attack);
   playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
  // reset Player stats
  playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemy.names array
    var pickedEnemyObj = enemyInfo;

    // reset enemy.health before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);
   // pass the pickedEnemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
    fight(pickedEnemyObj);
    // player store
    if ( playerInfo.health > 0 && i < enemyInfo.length -1) {
      // ask the player if they want to go to the store.
      var  storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      if (storeConfirm) {
      shop();
    }
  }
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
   }
  }
  // start game within the loop to repeat without losing progress.
  endGame();
};

var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0 ) {
window.alert("The game has now ended. Let's see how you did!");
  } else {
    window.alert("you've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm ("Would you like to play again");
  if (playAgainConfirm) {
    startGame();
  }else {
    window.alert("Thank you for playing Robot Gladiators! come back soon.");
  }
};

// shop
var shop = function() {
  var shopOptionPrompt = window.prompt ("Would you like to REFILL your HEALTH, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE'" );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill" : playerInfo.refillHealth();
    break;
    // upgrade attack.
    case "UPGRADE":
    case "upgrade": playerInfo.upgradeAttack();
    break;
    // case default to leave.
    case "LEAVE":
    case "leave": window.alert("Leaving Store.");
    break;
    default: window.alert("you did not pick a valid option, try again.");
    // calling shop again to force player to pick a valid option.
    shop();
    break;
}
};

// player info
var playerInfo = {
  name: window.prompt("What is your robot's name"),
  health: 100,
  attack: 10,
  money:10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function(){
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};
// enemy information.
var enemyInfo = [
  {name: "Roborto", attack: randomNumber(10, 14)},
  {name: "Amy Android", attack: randomNumber(10, 14)},
  {name: "Robo Trumble", attack: randomNumber(10, 14)},
];

console.log(enemyInfo);
console.log(enemyInfo.length);
console.log(enemyInfo[0].name);
console.log(enemyInfo[3]);


// start Game
startGame();