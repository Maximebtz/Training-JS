
const box = document.createElement('div');
box.classList.add('square');

const btn = document.querySelector("button")
const board = document.querySelector('#board');



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let nb = 1;

function addSquare(){
  
  for(let i = 1; i <= 1; i++){
      
      const newbox = box.cloneNode(); 
      board.appendChild(newbox);
      newbox.style.background = getRandomColor();
  }
}

function delSquare(){
    const squares = document.querySelectorAll('.square');
    if (squares.length > 0) {
      const lastSquare = squares[squares.length - 1];
      board.removeChild(lastSquare);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
      addSquare();
    } else if (event.key === "ArrowUp") {
      delSquare()
    }
});

