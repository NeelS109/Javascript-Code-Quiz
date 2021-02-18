// Declared variables
var highScore = document.querySelector("#leaderboard");
var Back = document.querySelector("#Back");
var clear = document.querySelector("#clear");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();

