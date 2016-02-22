var grid = getElementByTagName("tbody");
var eachCard = getElementsByTagName('td');

grid.addEventListener("click",colorToRed);

function colorToBLue(){
  grid.style.backgroundColor = "blue";
}
function colorToRed(e){
  if(e.target && e.target.nodeName == "td"){
  eachCard.style.backgroundColor = "red";
  }
}
//hard code colors first
//after, how to randomizing adding classes to div(td)
