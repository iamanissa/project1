var itMatches = false;
var cards = document.querySelectorAll("[data-color]");


for(i=0;i<cards.length; i++){
  cards[i].addEventListener("click", function(){
    var currentCard = this;

    currentCard.classList.add("active");
    activeArray = document.querySelectorAll(".active");

    if(activeArray.length === 2){
      console.log(activeArray);
      if(activeArray[0].getAttribute("data-color") === activeArray[1].getAttribute("data-color")){
        itMatches = true;
        console.log("These cards are the same");
      }else{
        console.log("these cards are different");
        noMatch();
      }
    }
  });
}

function noMatch(){
  // if visible is set remove it, otherwise add it
  for(i=0;i<cards.length; i++){
    if(cards[i].classList.contains("active")){
      // cards[i].classList.toggle("grayAgain");
      newCard = cards[i];
      //wait and toggle active?
      setTimeout(function(){
        this.classList.remove("active");
      }.bind(newCard), 5000);
    }
  }
}

function yesMatch(){
  
}
//what does it mean to flip the cards over?
//if active cards are the same, do something, like remove them.
