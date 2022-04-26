// Player's character
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
playerMoney = 10;

// you can log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

// Enemy Roberto
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

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
      playerName +
        " attacked" +
        enemyName +
        " ." +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );
    if (enemyHealth <= 0) {
      window.alert(enemyName + "has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health Left.");
    }

    // remove player's health by subtracting from enemy's attack
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked" + playerName + " ." + playerName + " still has " + playerHealth + " health remaining.");
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
fight();
