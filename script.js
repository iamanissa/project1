var cards = document.querySelectorAll("[data-color]");


for(i=0;i<cards.length; i++){
  cards[i].addEventListener("click", changeToColor);
}


//what do you want when you click the div(card)? change color.
function changeToColor(){
  this.getAttribute("data-color");
  this.classList.add("active");
  stopAfterTwoCards();
  compare();
}

//only have 2 active cards at a time.
function stopAfterTwoCards(e){
  activeArray = document.querySelectorAll(".active");
  if(activeArray.length === 2){
    for(i=2;i<cards.length; i++){
      cards[i].addEventListener("click", function backToGray(){
        this.className += " grayAgain";
      });
    }
  }
}

function compare(){
  activeArray = document.querySelectorAll(".active");
  if(activeArray.length === 2){
    if(activeArray[0].getAttribute("data-color") === activeArray[1].getAttribute("data-color")){
      console.log("These cards are the same");
    }
  }
}

//what does it mean to flip the cards over?
//if active cards are the same, do something, like remove them.
