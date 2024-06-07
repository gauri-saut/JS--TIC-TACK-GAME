document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const resetBtn = document.getElementById('reset-btn');
    let currentPlayer = 'X';
    let gameWon = false;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let turn0 = true;

    const checkWinner = () => {
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (boxes[a].innerHTML !== "" && boxes[a].innerHTML === boxes[b].innerHTML && boxes[b].innerHTML === boxes[c].innerHTML) {
                alert(`Player ${currentPlayer} wins!`);
                gameWon = true;
                break;
            }
        }
    };

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (!gameWon && box.innerHTML === "") {
                if (turn0) {
                    box.innerHTML = "O";
                    currentPlayer = 'O';
                    turn0 = false;
                } else {
                    box.innerHTML = "X";
                    currentPlayer = 'X';
                    turn0 = true;
                }document.addEventListener('DOMContentLoaded', () => {
                    const boxes = document.querySelectorAll('.box');
                    const resetBtn = document.getElementById('reset-btn');
                    let currentPlayer = 'X';
                    let gameWon = false;
                
                    const winningCombinations = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                    ];
                
                    let turn0 = true;
                
                    const checkWinner = () => {
                        for (let i = 0; i < winningCombinations.length; i++) {
                            const [a, b, c] = winningCombinations[i];
                            if (boxes[a].innerHTML !== "" && boxes[a].innerHTML === boxes[b].innerHTML && boxes[b].innerHTML === boxes[c].innerHTML) {
                                if (boxes[a].innerHTML === "O") {
                                    alert(`Player O wins!`);
                                } else {
                                    alert(`Player X wins!`);
                                }
                                gameWon = true;
                                break;
                            }
                        }
                    };
                
                    boxes.forEach((box) => {
                        box.addEventListener("click", () => {
                            if (!gameWon && box.innerHTML === "") {
                                if (turn0) {
                                    box.innerHTML = "O";
                                    currentPlayer = 'O';
                                    turn0 = false;
                                } else {
                                    box.innerHTML = "X";
                                    currentPlayer = 'X';
                                    turn0 = true;
                                }
                                box.disabled = true;
                                checkWinner();
                            }
                        });
                    });
                
                    resetBtn.addEventListener("click", () => {
                        boxes.forEach((box) => {
                            box.innerHTML = "";
                            box.disabled = false;
                        });
                        currentPlayer = 'X';
                        gameWon = false;
                    });
                });
                
                box.disabled = true;
                checkWinner();
            }
        });
    });

    resetBtn.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerHTML = "";
            box.disabled = false;
        });
        currentPlayer = 'X';
        gameWon = false;
    });
});
