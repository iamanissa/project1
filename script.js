
var arrayOfClasses = ["red", "red", "blue", "blue", "hotpink", "hotpink", "purple", "purple", "orangered", "orangered", "gold", "gold", "teal", "teal", "olive", "olive"];

var board1 = document.querySelector("#board");

//make start text disappear and toggle reset and start button visibility
function startBoard(){
  document.querySelector("h1").style.display = "none";
  makeBoard();
  isReset = document.getElementById("reset");
  isStart = document.getElementById("firstScreen");
  isStart.classList.remove("visible");
  isStart.classList.add("hidden");
  isReset.classList.remove("hidden");
  isReset.classList.add("visible");
}

//create a function that hides html "you win" text from user and restarts board
function resetBoard(){
  win = document.querySelector(".win");
  win.classList.add("hidden");
  parent = document.getElementById("board");
  allCards = document.querySelectorAll(".color");
  for(i=0;i<allCards.length; i++){
      parent.removeChild(allCards[i]);
  }
  makeBoard();
}

//create a function that dynamically makes the board (for reusability)
function makeBoard(){
  var newDeck = shuffleDeck(arrayOfClasses);
  for(i=0;i<newDeck.length; i++){
    var div = document.createElement("div");
    div.classList.add("color");
    board1.appendChild(div);
    div.setAttribute("data-color", newDeck[i]);
  }
  var cards = document.querySelectorAll("[data-color]");

  //decide what happens on click of each card
  for(i=0;i<cards.length; i++){
    cards[i].addEventListener("click", function(){
      var currentCard = this;
      currentCard.classList.add("active");
      activeArray = document.querySelectorAll(".active");

      //if 2 cards have the class 'active' then compare to see if they match.
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

  //if cards don't match, flip card backover, and allow user to try again.
  function noMatch(){
    for(i=0;i<cards.length; i++){
      // if visible is set remove it, otherwise add it
      if(cards[i].classList.contains("active")){
        flipCard = cards[i];
        setTimeout(function(){
          this.classList.remove("active");
        }.bind(flipCard), 250);
      }
    }
  }

  //if cards do match add the grayAgain class to signify they have been choosen so user will not pick them again.
  function yesMatch(){
    for(i=0;i<cards.length; i++){
      if(cards[i].classList.contains("active")){
        keepCard = cards[i];
        keepCard.classList.add("grayAgain");
        setTimeout(function(){
          this.classList.remove("active");
        }.bind(keepCard), 250);
      }
    }
  }

  //if all cards have grayAgain class then you have found all matches and won game.
  function gameWon(){
    var playerWin = 0;
    for(i=0;i<cards.length; i++){
      if(cards[i].classList.contains("grayAgain")){
        win = document.querySelector(".win");
        playerWin += 1;
        if(playerWin === document.querySelectorAll("[data-color]").length){
          console.log("You Win!");
          win.classList.remove("hidden");
        }
      }
    }
  }
}


//found shuffle array here: https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffleDeck(array){
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

document.getElementById("reset").addEventListener("click", resetBoard);

document.getElementById("start").addEventListener("click", startBoard);


//TODO = make arrayOfClasses2 = ["red", "red", "blue", "blue", "hotpink", "hotpink", "purple", "purple", "orangered", "orangered", "gold", "gold", "teal", "teal", "olive", "olive"];
