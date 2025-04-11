# Ping Pong Score Keeper

### Introduction
Welcome to the Ping Pong Score Keeper! This is a simple web application designed to help you keep track of scores for two players during a ping pong game. It’s user-friendly, visually appealing, and built with basic web technologies.

### How It Works
The Ping Pong Score Keeper allows you to:

- Increment the score for each player by clicking their respective buttons.
- Set a winning score to determine when the game ends.
- Reset the game to start fresh.

### Technologies Used
1. **HTML**: Provides the structure of the webpage.
2. **CSS Framework (Bulma)**: Used to style the webpage, giving it a clean and modern look.
3. **JavaScript (DOM Manipulation)**: Adds interactivity to the webpage, such as updating scores, changing colors, and resetting the game.

### Features
1. **Player Buttons**: Each player has a button to increase their score.
2. **Winning Score Selector**: You can choose the score required to win the game.
3. **Reset Button**: Resets the scores and game state to start over.
4. **Dynamic Colors**: The winning player’s score turns green, and the losing player’s score turns red.
5. **Shorthand Arrow Functions**: Used to simplify the code and make it more concise.

### How It Was Built
Here's a simple explanation of how the app works:
1. **HTML Structure**:
- The webpage includes buttons for each player, a dropdown to select the winning score, and a reset button.
- Each player’s score is displayed next to their button.
2. **Bulma Framework**:
- Bulma was used to style the buttons, dropdown, and layout. It provides a polished look without requiring custom CSS.
3. **JavaScript (DOM Manipulation)**:
- `querySelector`: Used to select elements like buttons, score displays, and the dropdown.
- `addEventListner`: Listens for user actions like button clicks or dropdown changes.
- `classList`: Adds or removes CSS classes to dynamically change the color of the scores (e.g., green for the winner, red for the loser).
- **Shorthand Arrow Functions**: Simplifies event listener callbacks for cleaner and more concise code.
- **Game Logic**: JavaScript keeps track of the scores, checks if a player has won, and disables buttons when the game is over.

### How to Use
1. Open the webpage in your browser.
2. Click the buttons to increase each player’s score.
3. Use the dropdown to set the winning score.
4. When a player reaches the winning score, the game ends, and the scores change color.
5. Click the reset button to start a new game.
