
// variables
const startScreen = document.getElementById("startScreen")
const gameScreen = document.getElementById("gameScreen")
const startButton = document.getElementById("startButton")
const backButton = document.getElementById("backButton")
const rockButton = document.getElementById("rockButton")
const paperButton = document.getElementById("paperButton")
const scissorsButton = document.getElementById("scissorsButton")

let userChoice = "";
let computerChoice = 


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
    alert("You chose " + userChoice);
});

paperButton.addEventListener("click", function()
{
    console.log("paper");
    userChoice = "Paper"
    alert("You chose " + userChoice);
});

scissorsButton.addEventListener("click", function()
{
    console.log("scissors");
    userChoice = "Scissors"
    alert("You chose " + userChoice);
});


