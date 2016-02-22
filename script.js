var cardOne = document.querySelector(".card1");


cardOne.addEventListener("click",colorToRed);

function colorToBLue(){
  cardOne.style.backgroundColor = "blue";
}
function colorToRed(){
  cardOne.style.backgroundColor = "red";
}
//hard code colors first
//after, how to randomizing adding classes to div(td)
