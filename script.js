/* Course: SENG 513 */
/* Date: OCT 29, 2023 */
/* Assignment 3 */
/* Name: Zhifan Li */
/* UCID: 30089428 */

/**
 * Player 1 object representing the first player.
 * @property {string} playerId - The player's ID.
 * @property {HTMLElement} car - The player's car element.
 * @property {HTMLElement} obstacle - The first obstacle element.
 * @property {HTMLElement} obstacle2 - The second obstacle element.
 * @property {HTMLElement} scoreElement - The element displaying the player's score.
 * @property {HTMLElement} gameContainer - The game container element.
 * @property {number} gameSpeed - The speed of the game.
 * @property {boolean} isGameOver - Indicates whether the player's game is over.
 */

const player1 = {
    playerId: '1',
    car: document.getElementById("car"),
    obstacle: document.getElementById("obstacle"),
    obstacle2: document.getElementById("obstacle-2"),
    scoreElement: document.getElementById("score"),
    gameContainer: document.querySelector(".game-container"),
    gameSpeed: 35,
    isGameOver: false,
};

/**
 * Player 2 object representing the second player.
 * @property {string} playerId - The player's ID.
 * @property {HTMLElement} car - The player's car element.
 * @property {HTMLElement} obstacle - The first obstacle element.
 * @property {HTMLElement} obstacle2 - The second obstacle element.
 * @property {HTMLElement} scoreElement - The element displaying the player's score.
 * @property {HTMLElement} gameContainer - The game container element.
 * @property {number} gameSpeed - The speed of the game.
 * @property {boolean} isGameOver - Indicates whether the player's game is over.
 */

const player2 = {
    playerId: '2',
    car: document.getElementById("car-2"),
    obstacle: document.getElementById("obstacle-3"),
    obstacle2: document.getElementById("obstacle-4"),
    scoreElement: document.getElementById("score-2"),
    gameContainer: document.querySelector(".game-container-2"),
    gameSpeed: 35,
    isGameOver: false,
};

let gameStarted = false;
let score1 = 0;
let score2 = 0;
let gameInterval;

/**
 * Initializes the obstacle positions for both players.
 */
function initObstacles() {
    player1.obstacle.style.top = "0px";
    player1.obstacle.style.left = Math.random() * 320 + 60 / 2 + "px";
    player1.obstacle2.style.top = "0px";
    player1.obstacle2.style.left = Math.random() * 320 + 60 / 2 + "px";
    player2.obstacle.style.top = "0px";
    player2.obstacle.style.left = Math.random() * 320 + 60 / 2 + "px";
    player2.obstacle2.style.top = "0px";
    player2.obstacle2.style.left = Math.random() * 320 + 60 / 2 + "px";
}

/**
 * Starts the game for both players.
 */
function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        startButton.style.display = "none";
        initObstacles();

        gameInterval = setInterval(() => updateGame(player1), 500);
        gameInterval = setInterval(() => updateGame(player2), 500);

    }
}


/**
 * Handles player movements based on keyboard input.
 * @param {object} player - The player object.
 * @param {Event} event - The keyboard event.
 */
function handlePlayerMovement(player, event) {
    const computedStyle = window.getComputedStyle(player.car);
    const leftVal = computedStyle.getPropertyValue("left");
    // Player 1 movement logic
    if (player.playerId === '1') {
        if ((event.key === "a" || event.key === "A") && parseInt(leftVal) > 0 + 60 / 2) {
            player.car.style.left = (parseInt(leftVal) - 15) + "px";
        }
        if ((event.key === "d" || event.key === "D") && parseInt(leftVal) + player.car.clientWidth < player.gameContainer.clientWidth + 60 / 2) {
            player.car.style.left = (parseInt(leftVal) + 15) + "px";
        }
    }
    // Player 2 movement logic
    if (player.playerId === '2') {
        if ((event.key === "ArrowLeft") && parseInt(leftVal) > 0 + 60 / 2) {
            player.car.style.left = (parseInt(leftVal) - 15) + "px";
        }
        if ((event.key === "ArrowRight") && parseInt(leftVal) + player.car.clientWidth < player.gameContainer.clientWidth + 60 / 2) {
            player.car.style.left = (parseInt(leftVal) + 15) + "px";
        }
    }
}

/**
 * Updates the game for the specified player.
 * @param {object} player - The player object.
 */
function updateGame(player) {
    // console.log(player.isGameOver)
    if (gameStarted && !player.isGameOver) {
        moveObstacle(player);
        checkCollision(player);

        if (player.gameSpeed <= 50) {
            player.gameSpeed += 0.05;
        }
    }
}

/**
 * Moves obstacles for the specified player.
 * @param {object} player - The player object.
 */
function moveObstacle(player) {
    const computedObstacleStyle = window.getComputedStyle(player.obstacle);
    const computedObstacleStyle2 = window.getComputedStyle(player.obstacle2);

    const topVal = computedObstacleStyle.getPropertyValue("top");
    const topVal2 = computedObstacleStyle2.getPropertyValue("top");


    player.obstacle.style.top = parseInt(topVal) + player.gameSpeed + "px";
    player.obstacle2.style.top = parseInt(topVal2) + player.gameSpeed + "px";

    if (parseInt(topVal) > 400) {
        player.obstacle.style.top = "0px";
        player.obstacle.style.left = Math.random() * 320 + 60 / 2 + "px";
        player.obstacle2.style.top = "0px";
        player.obstacle2.style.left = Math.random() * 320 + 60 / 2 + "px";
        player.scoreElement.textContent = "Score: " + (player === player1 ? ++score1 : ++score2);
    }
}

/**
 * Checks for collisions and handles game over for the specified player.
 * @param {object} player - The player object.
 */
function checkCollision(player) {

    if (player.playerId === '1') {
        console.log(player.obstacle.style.top)
        console.log("Car left: ", player.car.style.left)
        console.log("Car right: ", parseInt(player.car.style.left) + 35)

        console.log("Obstacle 1 left: ", player.obstacle.style.left)
        console.log("Obstacle 1 right: ", parseInt(player.obstacle.style.left) + 80)

        console.log("Obstacle 2 left: ", player.obstacle2.style.left)
        console.log("Obstacle 2 right: ", parseInt(player.obstacle2.style.left) + 80)
    }

    if (parseInt(player.obstacle.style.top) > 380 && (
        ((parseInt(player.car.style.left) + 17.5) > (parseInt(player.obstacle.style.left) - 40) &&
            (parseInt(player.car.style.left) + 17.5) < (parseInt(player.obstacle.style.left) + 40))
        ||
        ((parseInt(player.car.style.left) + 17.5) > (parseInt(player.obstacle.style.left) - 40) &&
            (parseInt(player.car.style.left) - 17.5) < (parseInt(player.obstacle.style.left) + 40))
        ||
        ((parseInt(player.car.style.left - 17.5)) > (parseInt(player.obstacle.style.left) - 40) &&
            (parseInt(player.car.style.left) - 17.5) < (parseInt(player.obstacle.style.left) + 40))
    )) {
        console.log("O1 caused player to lose")
        console.log(player.obstacle.style.top)
        console.log("Car left: ", parseInt(player.car.style.left) - 17.5)
        console.log("Car right: ", parseInt(player.car.style.left) + 17.5)

        console.log("Obstacle 1 left: ", parseInt(player.obstacle.style.left) - 40)
        console.log("Obstacle 1 right: ", parseInt(player.obstacle.style.left) + 40)

        console.log("Obstacle 2 left: ", parseInt(player.obstacle2.style.left) - 40)
        console.log("Obstacle 2 right: ", parseInt(player.obstacle2.style.left) + 40)
        console.log("Game over.");
        gameOver(player);
    }

    if (parseInt(player.obstacle2.style.top) > 380 && (
        ((parseInt(player.car.style.left) + 17.5) > (parseInt(player.obstacle2.style.left) - 40) &&
            (parseInt(player.car.style.left) + 17.5) < (parseInt(player.obstacle2.style.left) + 40))
        ||
        ((parseInt(player.car.style.left) + 17.5) > (parseInt(player.obstacle2.style.left) - 40) &&
            (parseInt(player.car.style.left) - 17.5) < (parseInt(player.obstacle2.style.left) + 40))
        ||
        ((parseInt(player.car.style.left - 17.5)) > (parseInt(player.obstacle2.style.left) - 40) &&
            (parseInt(player.car.style.left) - 17.5) < (parseInt(player.obstacle2.style.left) + 40))
    )) {
        console.log("O2 caused player to lose")
        console.log(player.obstacle2.style.top)
        console.log("Car left: ", parseInt(player.car.style.left) - 17.5)
        console.log("Car right: ", parseInt(player.car.style.left) + 17.5)

        console.log("Obstacle 1 left: ", parseInt(player.obstacle.style.left) - 40)
        console.log("Obstacle 1 right: ", parseInt(player.obstacle.style.left) + 40)

        console.log("Obstacle 2 left: ", parseInt(player.obstacle2.style.left) - 40)
        console.log("Obstacle 2 right: ", parseInt(player.obstacle2.style.left) + 40)
        console.log("Game over.");
        gameOver(player);
    }


}

/**
 * Handles the game over state for both players.
 * @param {object} player - The player object.
 */
function gameOver(player) {
    player.isGameOver = true;

    if (player1.isGameOver && player2.isGameOver) {
        const players = [
            { player: "Player 1", score: score1 },
            { player: "Player 2", score: score2 },
        ];

        players.sort((a, b) => b.score - a.score);

        const winner = players[0];
        const secondPlace = players[1];

        alert(`Game Over.\nWinner: ${winner.player} (Score: ${winner.score})\nSecond Place: ${secondPlace.player} (Score: ${secondPlace.score})`);
    }
}

document.addEventListener("keydown", function (event) {
    if (!player1.isGameOver) {
        handlePlayerMovement(player1, event);
    }

    if (!player2.isGameOver) {
        handlePlayerMovement(player2, event);
    }
});

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => startGame());
