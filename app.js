let row = document.querySelectorAll('.row div');
let currentPlayer = 'X';
let gameOver = false;
let reset = document.querySelectorAll('button')

row.forEach(function (row) {
    row.addEventListener("click", cellClicked);
});



function cellClicked(e) {

    if (gameOver === true) {
        resetBoard();
    }
    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        return;
    };

    e.target.textContent = currentPlayer;

    togglePlayer();
    checkRow();
}



function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    };
};


function checkRow() {
    if (row[0].textContent > " " && row[0].textContent === row[1].textContent && row[0].textContent === row[2].textContent) {
        alert(row[0].textContent + " you are the winner!");
        gameOver=true;
    } else if (row[3].textContent > " " && row[3].textContent === row[4].textContent && row[3].textContent === row[5].textContent) {
        alert(row[3].textContent + " you are the winner!");
        gameOver=true;
    } else if (row[6].textContent > " " && row[6].textContent === row[7].textContent && row[6].textContent === row[8].textContent) {
        alert(row[6].textContent + " you are the winner!");
        gameOver=true;
    } else {
        checkCol();
    }
};

function checkCol() {
    if (row[0].textContent > " " && row[0].textContent === row[3].textContent && row[0].textContent === row[6].textContent) {
        alert(row[0].textContent + " you are the winner!");
        gameOver=true;
    } else if (row[1].textContent != " " && row[1].textContent === row[4].textContent && row[1].textContent === row[7].textContent) {
        alert(row[1].textContent + " you are the winner!");
        gameOver=true;
    } else if (row[2].textContent > " " && row[2].textContent === row[5].textContent && row[2].textContent === row[8].textContent) {
        alert(row[2].textContent + " you are the winner!");
        gameOver=true;
    } else {
        checkAng();
    }
};

function checkAng() {
    if (row[0].textContent > " " && row[0].textContent === row[4].textContent && row[0].textContent === row[8].textContent) {
        alert(row[0].textContent + " you are the winner!");
        gameOver=true;
    } else if (row[2].textContent > " " && row[2].textContent === row[4].textContent && row[2].textContent === row[6].textContent) {
        alert(row[2].textContent + " you are the winner!");
        gameOver=true;
    } else {
        console.log('no winners)');
    }
};
function resetBoard() {
    row.forEach(function (row) {
        row.textContent = " ";
    });

    gameOver = false;
};