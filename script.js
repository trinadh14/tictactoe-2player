document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('.cell');
    const statusDisplay = document.getElementById('status');
    let currentPlayer = 'X';
    let gameActive = true;
    let board = ['', '', '', '', '', '', '', '', ''];

    function updateBoard(index, player) {
        board[index] = player;
        cells[index].textContent = player;
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]            // diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameActive = false;
                statusDisplay.textContent = `Player ${currentPlayer} wins!`;
                return;
            }
        }

        if (!board.includes('')) {
            gameActive = false;
            statusDisplay.textContent = 'It\'s a draw!';
        }
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', function() {
            if (gameActive && !board[index]) {
                updateBoard(index, currentPlayer);
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});
