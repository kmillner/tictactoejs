var board;
var cell;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
[0,3,6], [1,4,7], [2,5,8],
[0,4,8], [6,4,2]]
var gameOver;

function Cell(cell) {
  this.cell = "";
  this.isOccupied = false;
}

function createBoard(){
  for (var i =0; i<board.length; i++){
    $('.'+i).text(board[i]);
  }
}

Cell.prototype.setCell = function(value){
  if(value !== 'X' && value !== 'O'){
    return;
  } else if (this.isOccupied){
    alert("Ouch!");
  }
}

function createText(){
  $('.playerText').text('Turn :' + player)
}

function cellClick(cell) {
    if (cell.innerHTML === 'X' || cell.innerHTML === 'O') {
        return;
    }
    cell.innerHTML = player;
    currentPlayer();
}

function init(){
  board = [" "," "," "," "," "," "," "," "," "];
  player ="X";
  gameOver = false;
  createBoard();
  createText();
}

function startNewGame(){
  location.reload(true);
}

var img= '<img src="./img/rila.gif"/>';
var img= '<img src="./img/kori.gif"/>';

$(document).ready(function(){
  init();
  // $(this).find('.cell').html(txt).show();
   $(this).find('.cell').click(function(){
       if($(this).html() == img)
           $(this).html(txt).show();
       else
           $(this).html(img).show();
});
});
