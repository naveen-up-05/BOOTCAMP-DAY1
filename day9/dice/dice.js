function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    console.log("🎲 Welcome to the Dice Game 🎲");

    let pplayer1 = rollDice();
    let player2 = rollDice();

    console.log(`You rolled: ${player1l}`);
    console.log(`Computer rolled: ${player2}`);

    if (player1 > player2) {
        console.log("🎉 You win!");
    } else if (player1 < player2) {
        console.log("💻 Computer wins!");
    } else {
        console.log("😲 It's a tie!");
    }
}

playGame();
