
// variables
const startScreen = document.getElementById("startScreen")
const gameScreen = document.getElementById("gameScreen")
const startButton = document.getElementById("startButton")
const backButton = document.getElementById("backButton")
const rockButton = document.getElementById("rockButton")
const paperButton = document.getElementById("paperButton")
const scissorsButton = document.getElementById("scissorsButton")

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

// look at user choice and computer choice to decide who won the round
function compareChoices()           
{
    

}

let userChoice = "";


// start button switches to game screen
startButton.addEventListener("click", function()
{
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";

});

// back button switches back to start screen
backButton.addEventListener("click", function()
{
    gameScreen.style.display = "none";
    startScreen.style.display = "block";
});

// options buttons
rockButton.addEventListener("click", function()
{
    console.log("rock");
    userChoice = "Rock"
    computerChoice = getComputerChoice();
    alert("You chose " + userChoice + "\nComputer chose " + computerChoice);
});

paperButton.addEventListener("click", function()
{
    console.log("paper");
    userChoice = "Paper"
    computerChoice = getComputerChoice();
    alert("You chose " + userChoice + "\nComputer chose " + computerChoice);
});

scissorsButton.addEventListener("click", function()
{
    console.log("scissors");
    userChoice = "Scissors"
    computerChoice = getComputerChoice();
    alert("You chose " + userChoice + "\nComputer chose " + computerChoice);
});
