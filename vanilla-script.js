/* Course: SENG 513 */
/* Date: OCT 16, 2023 */
/* Assignment 2 */
/* Name: Zhifan Li */
/* UCID: 30089428 */

const car = document.getElementById("car");
const car2 = document.getElementById("car-2");

const obstacle = document.getElementById("obstacle");
const obstacle2 = document.getElementById("obstacle-2");
const obstacle3 = document.getElementById("obstacle-3");
const obstacle4 = document.getElementById("obstacle-4");

const scoreElement = document.getElementById("score");
const scoreElement2 = document.getElementById("score-2");

const startButton = document.getElementById("start-button");
const computedStyle = window.getComputedStyle(car);
const computedStyle2 = window.getComputedStyle(car2);

const leftValue = computedStyle.getPropertyValue("left");
const leftValue2 = computedStyle2.getPropertyValue("left");

const gameContainer = document.querySelector(".game-container");
const gameContainer2 = document.querySelector(".game-container-2");

const computedObstacleStyle = window.getComputedStyle(obstacle);
const computedObstacleStyle2 = window.getComputedStyle(obstacle2);

const computedObstacleStyle3 = window.getComputedStyle(obstacle3);
const computedObstacleStyle4 = window.getComputedStyle(obstacle4);



let score = 0;
let score2 = 0;

let gameSpeed1 = 15;
let gameSpeed2 = 15;

let isGameOver = false;
let isGameOver2 = false;

let gameStarted = false;


// Function to start the game
function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        // update player 1's Game every 1 second
        // update player 2's Game every 1 second

    }
}


document.addEventListener("keydown", function (event) {
    // if user 1 is still playing

        // if pressed a or A
        // move car to the left
        
        // if pressed d or D
        // move car to the right

    // if user 2 is still playing

        // if pressed <-
        // move car to the left
        
        // if pressed ->
        // move car to the right

})

// Function to update the game for first player
function updateGame() {
    // if (gameStarted && !isGameOver) 
        // Move the first obstacle down
        // Move the second obstacle down

        // Check if the obstacle is out of bounds
        // Reset obstacle position and increase score
        // obstacle.style.top = "0px";
        // obstacle.style.left = Math.random() * 320 + 60 / 2 + "px";
        // + 1 score
        // score++;
        // updated score
        // Check for collision

        // if collide
            // game over
            // gameOver();

        // if speed under 50 px
        // if(gameSpeed1<=50){

        //     // increase speed
        //     gameSpeed1+=0.1;
        //     console.log(gameSpeed1)
        // }

}



// Function to update the game for second player
function updateGame_2() {
    // if (gameStarted && !isGameOver) 
        // Move the first obstacle down for player 2
        // Move the second obstacle down for player 2

        // Check if the obstacle is out of bounds
        // Reset obstacle position and increase score
        // obstacle.style.top = "0px";
        // obstacle.style.left = Math.random() * 320 + 60 / 2 + "px";
        // + 1 score
        // score2++; // add one score for player 2
        // updated score
        // Check for collision

        // if collide
            // game over
            // gameOver2();

        // if speed under 50 px
        // if(gameSpeed1<=50){

        //     // increase speed
        //     gameSpeed1+=0.1;
        //     console.log(gameSpeed1)
        // }

}

// Function to end the game for player 1
// function gameOver() {
//     isGameOver = true;
//     clearInterval(gameInterval); // Stop the game loop
//     if(isGameOver && isGameOver2){
//         alert(`Game Over. \nPlayer 1 Score: ${score}+ "\nPlayer 2 Score: "+ ${score2}`);
//         if player 1 score higher, player 1 wins, else player 2 wins
//         location.reload(); // Reload the page to restart the game
//     }
// }


// Function to end the game for player 2
// function gameOver2() {
//     isGameOver2 = true;
//     clearInterval(gameInterval2); // Stop the game loop
//     if(isGameOver && isGameOver2){
//         alert(`Game Over. \nPlayer 1 Score: ${score}+ "\nPlayer 2 Score: "+ ${score2}`);
//         if player 1 score higher, player 1 wins, else player 2 wins
//         location.reload(); // Reload the page to restart the game
//     }
// }