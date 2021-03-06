/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Declares
var scores, roundScores, activePlayer, gamePlaying, dice;

scores = [0, 0];
roundScores = 0;
activePlayer = 0;
gamePlaying = 0;


document.querySelector('.dice').style.display = 'none';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1. Random number
    var dice = Math.floor((Math.random() * 6) + 1);

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    // 3. Update the round score if the rolled number was NOT a 1

});