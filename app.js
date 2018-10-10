let row = document.querySelectorAll('.row');
let currentPlayer = "X";


row.forEach(function (row) {
    row.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    // if () {

    // }
    e.target.textContent = currentPlayer;
    togglePlayer();




}

function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    };
    
};
