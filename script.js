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
        console.log("These cards are the same");
        yesMatch();
        gameWon();
      }else{
        console.log("these cards are different");
        noMatch();
      }
    }
  });
}

function noMatch(){
  for(i=0;i<cards.length; i++){
    // if visible is set remove it, otherwise add it
    if(cards[i].classList.contains("active")){
      flipCard = cards[i];
      setTimeout(function(){
        this.classList.remove("active");
      }.bind(flipCard), 1000);
    }
  }
}

function yesMatch(){
  for(i=0;i<cards.length; i++){
    if(cards[i].classList.contains("active")){
      keepCard = cards[i];
      keepCard.classList.add("grayAgain");
      setTimeout(function(){
        this.classList.remove("active");
      }.bind(keepCard), 1000);
    }
  }
}

function gameWon(){
  var playerWin = 0;
  for(i=0;i<cards.length; i++){
    if(cards[i].classList.contains("grayAgain")){
      win = document.querySelector(".win")
      playerWin += 1;
      if(playerWin === document.querySelectorAll("[data-color]").length){
        console.log("You Win!");
        win.classList.remove("hidden");
        win.classList.add("visible");
      }
    }
  }
}


//TODO: what happens when you win?
//TODO: add shuffle function.

//TODO: turn cards into grid.
//TODO: Maybe make console.logs appear at top for user to see
//TODO: silver: add pictures?
//TODO: gold: how to reset without refreshing the page?
//TODO: gold: Does the start button do anything?
