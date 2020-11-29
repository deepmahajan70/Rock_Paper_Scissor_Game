var player1 = prompt("Enter Name of Player 1");
var player2 = prompt("Enter Name of Player 2");

var randomNumber1 = Math.floor(Math.random() * 3) + 1; //1-3

var randomDiceImage = randomNumber1 + ".png"; //1.png - 3.png

var randomImageSource = "images/" + randomDiceImage ; //images/dice1.png - images/dice6.png

var image1 = document.getElementsByClassName("img1")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomDiceImage2 = randomNumber2 + ".png"; //1.png - 3.png

var randomImageSource2 = "images/" + randomDiceImage2 ;

var image2 = document.getElementsByClassName("img2")[0];

image2.setAttribute("src", randomImageSource2);

if ((randomNumber1==1 && randomNumber2==2) ||(randomNumber1==3 && randomNumber2==1) || (randomNumber1==2 && randomNumber2==3)) {
  document.querySelector("h1").innerHTML = player2 + " Won! 🚩";
  document.querySelector("p#p1").innerHTML= player1;
  document.querySelector("p#p2").innerHTML= player2;
}
else if ((randomNumber1==1 && randomNumber2==3) ||(randomNumber1==3 && randomNumber2==2) ||(randomNumber1==2 && randomNumber2==1)) {
  document.querySelector("h1").innerHTML = "  🚩"+ player1 +" Won!";
  document.querySelector("p#p1").innerHTML= player1;
  document.querySelector("p#p2").innerHTML= player2;
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
  document.querySelector("p#p1").innerHTML= player1;
  document.querySelector("p#p2").innerHTML= player2;
}
