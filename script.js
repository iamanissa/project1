var cardOne = document.querySelector(".card1");
var cardTwo = document.querySelector(".card2");
var cardThree = document.querySelector(".card3");
var cardFour = document.querySelector(".card4");


cardOne.addEventListener("click",colorToRed);
cardTwo.addEventListener("click",colorToBLue);
cardThree.addEventListener("click",colorToRed2);
cardFour.addEventListener("click",colorToBLue2);


function colorToRed(){
  cardOne.style.backgroundColor = "red";
}
function colorToBLue(){
  cardTwo.style.backgroundColor = "blue";
}

function colorToRed2(){
  cardThree.style.backgroundColor = "red";
}
function colorToBLue2(){
  cardFour.style.backgroundColor = "blue";
}

//hard code colors first
//after, how to randomizing adding classes to div(td)
