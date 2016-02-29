
var arrayOfClasses = ["red", "red", "blue", "blue", "hotpink", "hotpink", "purple", "purple", "orangered", "orangered", "gold", "gold", "teal", "teal", "olive", "olive"];

var board1 = document.querySelector("#board");

//make start text disappear and toggle reset and start button visibility
function startBoard(){
  document.querySelector("h1").style.display = "none";
  makeBoard();
  isReset = document.getElementById("reset");
  isStart = document.getElementById("firstScreen");
  // AM: Look into the `.toggle()` method. Could help in refactoring the next four lines...
  isStart.classList.remove("visible");
  isStart.classList.add("hidden");
  isReset.classList.remove("hidden");
  isReset.classList.add("visible");
}

function resetBoard(){
  //remove winning text
  var wintext = document.querySelector(".winClass");
  // AM: This line generates an error when the user tries to reset the game before winning/losing.
  // AM: I'm guessing it's because there's no element with the class `winClass` before the game is over.
  // AM: That being said, the game resets just fine with lines 20 and 24 are commented out. Perhaps you can fix this code by placing those lines in a conditional...
  wintext.parentNode.removeChild(wintext);
  //remove class color from cards to make them disappear.
  parent = document.getElementById("board");
  allCards = document.querySelectorAll(".color");
  for(i=0;i<allCards.length; i++){
      parent.removeChild(allCards[i]);
  }
  //run make board to make the board again.
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

  // AM: Can you think of a way to refactor `noMatch` and `yesMatch` into a single function?
  // AM: This single function would need to take a few arguments...

  //if cards don't match, flip card backover, and allow user to try again.
  function noMatch(){
    for(i=0;i<cards.length; i++){
      // if visible is set remove it, otherwise add it
      if(cards[i].classList.contains("active")){
        flipCard = cards[i];
        // AM: Nice use of `setTimeout` with `.bind()`.
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

        playerWin += 1;
        // AM: This is a long chunk of code. Anything we can do to shorten this? Some things to consider...
        // AM: Do we need all these selectors? Looking at `var board = ...`
        // AM: Are there selectors previously defined in your code we can use here, instead of declaring new ones?
        // AM: Can we chain any of these DOM manipulation methods?
        if(playerWin === document.querySelectorAll("[data-color]").length){
          //create div and add winClass class to it.
          var winDiv = document.createElement("div");
          winDiv.classList.add("winClass");
          //create paragraph with text
          var para = document.createElement("p");
          var uFoundNode = document.createTextNode("You found all the matches.");
          para.appendChild(uFoundNode);
          //create h1 with text
          var boldWin = document.createElement("h1");
          var winNode = document.createTextNode("Winner!");
          boldWin.appendChild(winNode);
          //paragraph and h1 to div
          winDiv.appendChild(para);
          winDiv.appendChild(boldWin);
          //add div after firstScreen div
          var board = document.getElementsByTagName("board");
          //insert div before
          document.body.insertBefore(winDiv, document.body.firstChild);

          console.log("You Win!");
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
