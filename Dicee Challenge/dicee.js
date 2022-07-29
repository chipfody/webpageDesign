var diceImage1 = "images/dice" + ((Math.floor(Math.random() * 6)) + 1) + ".png";
var diceImage2 = "images/dice" + ((Math.floor(Math.random() * 6)) + 1) + ".png";

var dieOne = document.querySelectorAll("img")[0].setAttribute("src", diceImage1);
var dieTwo = document.querySelectorAll("img")[1].setAttribute("src", diceImage2);


if (diceImage1 === diceImage2) {
  document.querySelector("h1").innerText = "Draw!";
} else if (diceImage1 > diceImage2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
} else {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
