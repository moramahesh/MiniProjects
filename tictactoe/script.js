function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

const player1Name = getQueryParam('p1');
const player2Name = getQueryParam('p2');

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let board = Array(9).fill(null);

const checkWinner = () => {

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];
    
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            let winnwerName = board[a] === 'X' ? player1Name : player2Name;
            setTimeout(() => alert(`${winnwerName} wins in game!`), 100);
            return true;
        }
    }
    
    if (!board.includes(null)) {
        setTimeout(() => alert("It's a draw!"), 100);
        return true;
    }
    return false;
};

const handleClick = (event) => {
    const index = event.target.id.split('-')[1];
    if (board[index] || checkWinner()) return;
    
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    
    if (!checkWinner()) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const resetGame = () => {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
