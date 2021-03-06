const board = document.querySelector('#board');
const SQUARES_NUMBER = 340;

const colors = ['#7C83FD', '#96BAFF', '#7DEDFF', '#88FFF7', '#FFC1F3', '#A275E3'] 

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square);
}

function setColor(elem){
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem){
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = '0 0 2px #000'

}

function getRandomColor(){
   return colors[Math.floor(Math.random() * colors.length)];
}

