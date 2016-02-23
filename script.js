var itMatches = false;
var cards = document.querySelectorAll("[data-color]");


for(i=0;i<cards.length; i++){
  cards[i].addEventListener("click", function(){
    var currentCard = this;
    activeArray = document.querySelectorAll(".active");

    if(activeArray.length < 2){
      currentCard.classList.add("active");
    }else{
      if(activeArray[0].getAttribute("data-color") === activeArray[1].getAttribute("data-color")){
        itMatches = true;
        console.log("These cards are the same");
      }else{
        itMatches = false;
        console.log("these cards are different");
      }
    }

  });
}



//what does it mean to flip the cards over?
//if active cards are the same, do something, like remove them.
