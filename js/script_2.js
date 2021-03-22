// console.log('hello'); //test

/* DICE GAME
    1. Generare un numero da 1 a 6 per il giocatore
    2. Generare un numero da 1 a 6 per il computer
    3. Confrontare i numeri e stabilire il vincitore in base al numero più grande
    4. Mostrare il vincitore
 */

// 1. & 2.
var dice = ['one', 'two', 'three', 'four', 'five', 'six'];
var playerNumber =  Math.floor(Math.random() * 6) + 1;
// console.log(userNumber);  //test
var playerDice = dice[playerNumber - 1];

document.getElementById('player-roll').innerHTML = playerNumber + '<span class="dice ' + playerDice + '"></span>';

var computerNumber =  Math.floor(Math.random() * 6) + 1;
// console.log(computerNumber); //test
var computerDice = dice[computerNumber - 1];
document.getElementById('computer-roll').innerHTML = computerNumber + '<span class="dice ' + computerDice + '"></span>';


// 3.
if(playerNumber > computerNumber){
    // console.log('Player Wins!'); //test
    document.getElementById('result').innerHTML = 'Player Wins!';
} else if(playerNumber < computerNumber){
    // console.log('Computer Wins!'); //test
    document.getElementById('result').innerHTML = 'Computer Wins!';
} else {
    // console.log('It\'s a Draw!'); //test
    document.getElementById('result').innerHTML = 'It\'s a Draw!';
}