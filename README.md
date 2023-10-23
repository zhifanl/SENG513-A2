# SENG513-A2
**Author**: Zhifan Li
**UCID**: 30089428

## GAME OVERVIEW

**Target Platform**: This game is designed for laptops with two players.

**Game Genre**: Car racing, collision avoidance, 2 players, retro game.

### Game Objective
- The primary goal of players is to avoid colliding with obstacles.
- The player with the highest score wins.
- As the game progresses, the car speed increases.

### Rules of the Game
- Players need to click the Start button to begin the game.
- Player 1 controls the red car with 'a' and 'd' on the keyboard to move left or right and avoid colliding with obstacles.
- As the game progresses, the car's speed increases, increasing the chances of collision.
- Successfully avoiding an obstacle earns the player 1 point.
- Player 2 controls the red car with the left arrow and right arrow keys to move left or right and avoid obstacles.
- If a player runs into an obstacle, they stop playing. If both players collide, the game ends, and the player with the highest score wins.

## Game Mechanics
### Player 1
- 'a': Move left
- 'd': Move right

### Player 2
- 'leftArrow': Move left
- 'rightArrow': Move right

### Start button: Start the game for both players.

## UI DESIGN
### Layout and Structure
- Logo and Icon
- Background image
- Button to start the game
- Game container with two game windows
- Two game windows representing two players
- Each window has a car and two moving obstacles
- Each window has a scoreboard
- Copyright and author at the bottom

### UI Design
- Two game windows, one on the left, and one on the right.
- Each game window has a car and two obstacles to avoid.
- Each game window has a scoreboard beside it.
- There is a button. If you click start, the button will disappear, and the game will start.

### Visual Elements
- Cars
- Obstacles
- Logo of the game
- Fire flame

## FUNCTIONALITY DESIGN

#### Custom Animations

- The user will move either the red car or the blue car by using the keyboard.
- We're using CSS transitions to smoothly animate the movement of the red and blue cars when the arrow keys are pressed. Here's how it works:

Example:

```
document.addEventListener('keydown', (event) => {
  const redCar = document.querySelector('.red-car');
  const blueCar = document.querySelector('.blue-car');


  if (event.key === 'ArrowLeft') {
    // Move blue car left
    blueCar.style.left = new position
  } else if (event.key === 'ArrowRight') {
    // Move blue car right
    blueCar.style.right =new position
  }
  if (event.key === A) {
    // Move red car left
    redCar.style.left = new position
  } else if (event.key === D) {
    // Move red car right
    redCar.style.right =new position
  }
});
```

- We add an event listener to the keydown event, which listens for keyboard inputs.
When the left or right arrow key is pressed, or a or d on the keyboard is pressed, the respecting car will move.
- We then update the left or right CSS property to move the car smoothly to the desired position.
- The obstacles will drop 15px per 0.3 seconds, and its speed will increase as the game goes until reaches a speed limit of 50px per 0.3 seconds.
- We select the obstacle element using querySelector.
- We set an initial obstacle-dropping speed of 15 pixels per 0.3 seconds.
obstacle.style.top = parseInt(topVal) + gameSpeed + "px";
- The dropObstacle function is called at intervals using setInterval. It resets the obstacle's position to the top and increases its speed by reducing the transition duration.
- This creates an animation where obstacles drop down at an increasing speed over time.

Check if the obstacle goes beyond boundary:

```
if (parseInt(topValUpdated) > 400) {
// Reset obstacle position and increase score
obstacle.style.top = "0px";
obstacle.style.left = Math.random() * 320 + 60 / 2 + "px";
}
```

If the obstacle goes beyond the boundary, it will go back to the top, visually people will feel that the old obstacle has passed, the new one has come.

#### Custom Interaction Mechanism

If your game involves moving and interacting elements, implement a custom collision detection mechanism.

This is how to avoid collision:
```
if (
parseInt(obstacle.style.top) > distanceFromTop &&
parseInt(car.style.left) + size of car > parseInt(obstacle.style.left) &&
parseInt(car.style.left) < parseInt(obstacle.style.left) + size of obstacle
) {
console.log("Game over.")
gameOver();
}
```

The collision detection logic checks if the bounding rectangles of the cars and the obstacle overlap in both the horizontal and vertical directions.
If a collision is detected, that user’s car will stop moving, the score will stop updating, and the game ends on his/her side.


#### Custom Algorithms
1. An algorithm to show the users who is the winner by comparing the scores between these two players.
2. I will implement a simple scoring algorithm that increases the score when a player successfully avoids an obstacle.

```
let score = 0;

function increaseScore() {
score += 10;
document.querySelector('.score').textContent = `Score: ${score}`;
}
```

We initialize a score variable to keep track of the player's score.
The increaseScore function increases the score by 1 point whenever it's called.
The game calls this function whenever a player successfully avoids an obstacle to increase their score, and after that, html element will also get updated.

3. Collision detection algorithm

Mentioned above

## Citations:

1. Pixel Cars:
[a link](https://www.shutterstock.com/search/pixel-car?c3apidt=71700000096003867&cr=bc&gclid=b8c4dc0d53ed13d4317ab93bbdaf5a33&gclsrc=3p.ds&kw=%2Fsearch%2F&msclkid=b8c4dc0d53ed13d4317ab93bbdaf5a33&pl=PPC_BNG_CA_DSA-&utm_campaign=CO%3DCA_LG%3DEN_BU%3DIMG_AD%3DDSA_TS%3Dlggeneric_RG%3DAMER_AB%3DACQ_CH%3DSEM_OG%3DCONV_PB%3DMicrosoft-Ads&utm_content=FF%3DDSA-Search_AU%3DSite+Visitors&utm_medium=cpc&utm_source=bing&utm_term=%2Fsearch%2F)

2. Flames:
[a link](https://en.m.wikipedia.org/wiki/File:BurningFlame0.gif)

3. Background IMG
[a link](https://www.bing.com/images/search?view=detailV2&ccid=SnZBqTe6&id=76CD9EAB1988EE83D7CBBBE5748D13688749861A&thid=OIP.SnZBqTe6Fm0C-I8I11YxGwHaFR&mediaurl=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F01%2F88%2F64%2F39%2F1000_F_188643968_bYWz2vgc620BzFfSatekSonZTJ9BMJho.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4a7641a937ba166d02f88f08d756311b%3Frik%3DGoZJh2gTjXTluw%26pid%3DImgRaw%26r%3D0&exph=713&expw=1000&q=car+racing+game+background+high+resolution&simid=607991409186132854&form=IRPRST&ck=7E4F4CC5C68C8177FD226EB3FB860668&selectedindex=21&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_foursJBJ*cp_30B099A04662712DDC10CE8B89731CDC*mid_2BEECBB831199ABE45492C2D85CBEAC6B487FA71*simid_608015649973605403*thid_OIP.foursJBJAjQWnd0c51EESwHaFH&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0)