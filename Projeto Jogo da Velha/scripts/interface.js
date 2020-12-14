document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});

function handleClick(event) {
    if (handleMove(event.target.id)) {
        setTimeout(() => {
            alert("O jogo acabou. O vencedor foi o jogador " + playerTime);
        }, 30);
    };
    updateSquare(event.target.id);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateAllSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let symbol = board[square.id];

        if (symbol != '') {
            square.innerHTML = '';
        }
    })
}
