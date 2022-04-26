// Player's character
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
playerMoney = 10;
// enemy data
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// you can log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
// for loop statement
for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at" + i + " index");
}

var fight = function () {
  // Alert players that they are starting the round.
  window.alert("welcome to Robot Gladiators!");
  // fight or skip
  var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKip' to choose.");
  // if player choses to fight then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemys health by subtracting the amount set in  player attack
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked" + enemyNames+ " ." + enemyNames + " now has " + enemyHealth + " health remaining.");
    if (enemyHealth <= 0) {
      window.alert(enemyNames + "has died!");
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health Left.");
    }

    // remove player's health by subtracting from enemy's attack
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked" + playerName + " ." + playerName + " still has " + playerHealth + " health remaining.");
    //  check players health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " Health Left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirming player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to quit?");
    // if true leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 2;
    } else {
      fight();
    }
  } else {
    window.alert("You need to chose a valid option. Try again!");
  }
};
// execute function
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
