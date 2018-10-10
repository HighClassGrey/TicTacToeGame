let row = document.querySelectorAll('.row div');
console.log(row)
let currentPlayer = 'X';




row.forEach(function (row) {
    row.addEventListener("click", cellClicked);
});

function cellClicked(e) {
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
    if (row[0].textContent === row[1].textContent && row[0].textContent === row[2].textContent) {
        alert("You are the Winner"); 
    } else if (row[3].textContent === row[4].textContent && row[3].textContent === row[5].textContent) {
        alert("You are the Winner");
    } else if (row[6].textContent === row[7].textContent && row[6].textContent === row[8].textContent) {
        alert("You are the Winner");
    } else {
        checkCol();
    }
};

function checkCol() {
    if (row[0].textContent === row[3].textContent && row[0].textContent === row[6].textContent) {
        alert("You are the Winner");
    } else if (row[1].textContent === row[4].textContent && row[1].textContent === row[7].textContent) {
        alert("You are the Winner"); 
    } else if (row[2].textContent === row[5].textContent && row[2].textContent === row[8].textContent) {
        alert("You are the Winner");
    } else {
        checkAng();
    }
};

function checkAng() {
    if (row[0].textContent === row[4].textContent && row[0].textContent === row[8].textContent) {
        alert("You are the Winner");
    } else if (row[2].textContent === row[4].textContent && row[2].textContent === row[6].textContent) {
        alert("You are the Winner");
    } else {
        console.log('no winners)');
    }
};


// function checkMid() {
//     if (row[3].textContent === row[4].textContent  && row[0].textContent  === row[2].textContent) {
//         console.log("we have a winner");
//     };

// };
    // } else if (row[3].textContent == row[4].textContent  && row[3].textContent == row[5].textContent) {
    //     console.log("row 2 a winner");
    // } else  (row[6].textContent == row[7].textContent && row[6].textContent == row[8].textContent) 
    //     console.log ('row 3 is the winner')
