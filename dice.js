var randomNum = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice" + randomNum +".png");


document.querySelector(".img2").setAttribute("src", "dice" + randomNum2 +".png");

function displayWinner () {

  if (randomNum === randomNum2) {

    document.querySelector("h1").innerHTML = "Draw!";
  }

  else if (randomNum > randomNum2) {

    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }

  else {

    document.querySelector("h1").innerHTML = 'Player 2 Wins!';
  };

}


displayWinner();
