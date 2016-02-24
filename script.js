
var arrayOfClasses = ["red", "red", "blue", "blue"];
var newDeck = shuffleDeck(arrayOfClasses);
var board1 = document.querySelector("#board");

//TODO: Upon refreshing the page, there should be something there.
function startBoard(){
  makeBoard();
  isReset = document.getElementById("reset");
  isStart = document.getElementById("start");
  isStart.classList.remove("visible");
  isStart.classList.add("hidden");
  isReset.classList.remove("hidden");
  isReset.classList.add("visible");
}

function resetBoard(){
  win = document.querySelector(".win");
  win.classList.add("hidden");
  parent = document.getElementById("board");
  allCards = document.querySelectorAll(".color");
  for(i=0;i<allCards.length; i++){
      parent.removeChild(allCards[i]);
      // allCards[i].classList.remove("grayAgain");
      // allCards[i].removeAttribute("data-color");
      //Want to remove .grayAgain and attribute data-color
  }
  makeBoard();
}

function makeBoard(){
  for(i=0;i<newDeck.length; i++){
    var div = document.createElement("div");
    div.classList.add("color");
    board1.appendChild(div);
    div.setAttribute("data-color", newDeck[i]);
  }
  var cards = document.querySelectorAll("[data-color]");
  // var startingDeck = ["dog", "dog", "rabbit", "rabbit"];


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
        }.bind(flipCard), 250);
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
        }.bind(keepCard), 250);
      }
    }
  }

  function gameWon(){
    var playerWin = 0;
    for(i=0;i<cards.length; i++){
      if(cards[i].classList.contains("grayAgain")){
        win = document.querySelector(".win");
        playerWin += 1;
        if(playerWin === document.querySelectorAll("[data-color]").length){
          console.log("You Win!");
          win.classList.remove("hidden");
          // win.classList.add("visible");
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

//TODO: how to reset and still keep divs visible all the time.


//TODO = make arrayOfClasses2 = ["red", "red", "blue", "blue", "hotpink", "hotpink", "purple", "purple", "orangered", "orangered", "gold", "gold", "teal", "teal", "olive", "olive"];
