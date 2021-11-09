var playerOneInput;
var playerTwoInput;
var winner;

function rockPaperScissors(clickedId) {
    // Input van spelers registreren
    if (playerOneInput) {
        playerTwoInput = clickedId;
    } else {
        playerOneInput = clickedId;
    }
    // Checken wie wint
    if (playerOneInput === playerTwoInput) {
        document.getElementById("title").innerText = "Het is gelijk spel!";
    } else if (playerOneInput == "rock" && playerTwoInput == "scissors") {
        document.getElementById("title").innerText = "Speler 1 heeft gewonnen!";
    } else if (playerOneInput == "scissors" && playerTwoInput == "paper") {
        document.getElementById("title").innerText = "Speler 1 heeft gewonnen!";
    } else if (playerOneInput == "paper" && playerTwoInput == "rock") {
        document.getElementById("title").innerText = "Speler 1 heeft gewonnen!";
    } else if (playerTwoInput == "rock" && playerOneInput == "scissors") {
        document.getElementById("title").innerText = "Speler 2 heeft gewonnen!";
    } else if (playerTwoInput == "scissors" && playerOneInput == "paper") {
        document.getElementById("title").innerText = "Speler 2 heeft gewonnen!";
    } else if (playerTwoInput == "paper" && playerOneInput == "rock") {
        document.getElementById("title").innerText = "Speler 2 heeft gewonnen!";
    }
}

setInterval(function changeTitle() {
    if (playerOneInput && !playerTwoInput) {
        document.getElementById("title").innerText = "Speler 2, kies een optie!";
    } else if (playerTwoInput) {
        let buttons = document.querySelectorAll("button");
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].style.display = "none";
        }
    }
}, 1);