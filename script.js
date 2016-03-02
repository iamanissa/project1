$(document).ready(function(){
    //FIXME: refactor global variables.
    //FIXME: naming conventions are bad everywhere.
    var arrayOfClasses = ["red", "red", "blue", "blue", "hotpink", "hotpink", "purple", "purple", "orangered", "orangered", "gold", "gold", "teal", "teal", "olive", "olive"];
    //FIXME: use jquery
    var board1 = document.querySelector("#board");

    //make start text disappear and toggle reset and start button visibility
    function startBoard(){
        $("h1").css("display","none");
        makeBoard();
        var isReset = $("#reset");
        var isStart = $("#firstScreen");
        //FIXME: this kind of repeats, try toggle?
        isStart.removeClass("visible");
        isStart.addClass("hidden");
        isReset.removeClass("hidden");
        isReset.addClass("visible");
    }

    function resetBoard(){
        //remove winning text
        var wintext = document.querySelector(".winClass");
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
    //FIXME: makeBoard function can be shortened into smaller functions.
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

    }

    //FIXME: make this long function smaller...
    //if all cards have grayAgain class then you have found all matches and won game.
    function gameWon(){
        var playerWin = 0;
        for(i=0;i<cards.length; i++){
            //FIXME: questions: can these if statements be one if statement?
            if(cards[i].classList.contains("grayAgain")){
                //FIXME: naming conventions for variables are horrible here. win this win that.
                playerWin += 1;
                if(playerWin === document.querySelectorAll("[data-color]").length){
                    //FIXME: possibly use jquery chaining.
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

    //FIXME: refactor js file into two files as it is longer than 100 lines.
    //FIXME: add more comments, while pairing up, forgot why I did things or what they did.
});
