
// variables
const startScreen = document.getElementById("startScreen")
const gameScreen = document.getElementById("gameScreen")
const startButton = document.getElementById("startButton")
const backButton = document.getElementById("backButton")


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
