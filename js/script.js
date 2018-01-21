// Global Variables
var painted;
var content;
var winConditions; // winningCombinations
var move = 0; // turn
var boxes; //theCanvas
var boxEl; // c
var boxContent; // cxt
var filledSquare = 0;
var w;
var y;

//Game mechanics
function boxClicked(num){
  boxes = "box" + num;
  boxEl = document.getElementById(boxes);
  $('body').animate({backgroundColor: "#fff"}, 200).animate({backgroundColor: "#000"}, 100);

  if(painted[num - 1] === false) {
    if(move % 2 === 0) {
      content[num - 1] = 'X';
      boxEl.classList.add("selectedX");
    } else {
      content[num - 1] = 'O';
      boxEl.classList.add("selectedO");
    }
    move++;
    painted[num - 1] = true;
    filledSquare++;
    checkWhoWon(content[num - 1]);

    if (filledSquare === 9) {
      var newHeader = document.createElement("h1");
      var newContent = document.createTextNode("Restart to play again!");
      newHeader.appendChild(newContent)
      var currentHeader = document.getElementById("endingText");
      document.body.insertBefore(newHeader, currentHeader);
    }
  }
}

function checkWhoWon(sign){
  for (var j = 0; j < winConditions.length; j++) {
    if (content[winConditions[j][0]] === sign &&
      content[winConditions[j][1]] === sign &&
      content[winConditions[j][2]] === sign) {
      if(sign === 'X') {
        document.getElementById("endingImage1").style.display = "inline-block";
        document.getElementById('divMain').style.pointerEvents = 'none';
      } else if(sign === 'O'){
        document.getElementById("endingImage2").style.display = "inline-block";
        document.getElementById('divMain').style.pointerEvents = 'none';
      }
    };
  };
}

function playAgain(){
  location.reload(true);
}

(function(){
  painted = new Array();
  content = new Array();
  winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  // Set board to false
  for(let i = 0; i <= winConditions.length; i++) {
    painted[i] = false;
    content[i] = '';
  }
})();
