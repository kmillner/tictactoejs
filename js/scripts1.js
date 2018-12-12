var board;
var player = "X";
var cell;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
[0,3,6], [1,4,7], [2,5,8],
[0,4,8], [6,4,2]]
var gameOver;
//var winAlert;

function createBoard(){
  for (var i =0; i<board.length; i++){
    $('.'+i).text(board[i]);
  }
}

function createText(){
  $('.playerText').text('Turn :' + player)
}

debugger;

function setCell(cell){
  if(gameOver) return;
  board[cell] = player;
  checkState();
  if (gameOver) return;
  currentPlayer();
  createBoard();
  createText();
}

debugger;
function cellClick(cell) {
    if (cell.innerHTML === 'X' || cell.innerHTML === 'O') {
        return;
    }
    cell.innerHTML = player;
    currentPlayer();
}

function currentPlayer(){
  if (player == "O")
  player = "X";
  else
  player = "O";
}

function checkState() {
$.each(winConditions, function(index,value){
  if (board[winConditions[index][0]] == board[winConditions[index][1]]
    && board[winConditions[index][0]] == board[winConditions[index][2]]
    && board[winConditions[index][0]] != " "){
      gameOver = true;
      $('.playerText').text('Player ' + player + ' wins');
      createBoard();
    }
  });
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
var txt = 'X';
var img= '<img src="./img/kori.gif"/>';
var txt = "O";
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
