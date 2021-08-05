'use strict';

//SELECTING AND MANIPULATING ELEMENTS
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//PLAYER SCORE
let score = 20;
let highScore = 0;

//functions

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

const displayScore = function(score){
    document.querySelector('.score').textContent = score;    
};

const randomNumber = function(){
    return Math.trunc(Math.random()*20)+1;
}

//GENERATING THE SECRET NUMBER
let secretNumber = randomNumber();
//Math.trunc(Math.random()*20)+1;



//CHECK BUTTON CLICK
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //IF THERE IS NO NUMBER
    if(!guess){
        displayMessage('No number!😞');
     
    } 
    //PLAYER WINS
    else if (guess === secretNumber){
        displayMessage('Correct Number!🎉');
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //high score
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    //When guess is wrong
    else if (guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Guess is too high ⬆️' : 'Guess is too low ⬇️');
            
            score--;
            displayScore(score);
            
        } else {
            displayMessage('You lost the game!😭');
            displayScore(0);
            
        }

    }
  


});

//RESET GAME
document.querySelector('.again').addEventListener('click', function(){

    //restore score variable
    score = 20;
    displayScore(score);
  

    //restore number variable
    document.querySelector('.number').textContent = '?';
    secretNumber = randomNumber();

    //restore message
    displayMessage('Start guessing...');
   

    //restore guess
    document.querySelector('.guess').value = '';

    //restore styles
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});




