"use strict";

const btnCheck = document.querySelector(".check");
const whereToAddMessage = document.querySelector(".message");
const newP = document.createElement("p");
const highScoreElement = document.querySelector(".highscore");
const scoreToChangeElement = document.querySelector(".score");
let score = 20;
scoreToChangeElement.textContent = score;
let isGameFinished = false;
let inputElement = document.querySelector(".guess");
const hiddenNumber = document.querySelector(".number");
const showNumber1Content = document.querySelector('.showNumber1');
const showNumber2Content = document.querySelector('.showNumber2');
const sectionNumberGuessed = document.querySelector('.sectionNumberGuessed');


let getHighscore = localStorage.getItem(('highscoreStorage'));
let highscore = Number(highScoreElement.textContent);

if(getHighscore){
    highscore = getHighscore;
    highScoreElement.textContent = highscore;
}

//choisir le nombre a deviner
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let secretNumber = getRandomInt(1, 20);
console.log(secretNumber);

//Logique quand on clique sur le boutton check
function onButtonClick() {
    if (isGameFinished) {
        return;
    }
    const guess = Number(inputElement.value);

    if(hasInputError()){return;}
    
    if(isNumberAlreadyGuessed(guess)){   
        document.body.style.backgroundColor = "lightblue";
        // return;
    } else{
        document.body.style.backgroundColor = "#222";
        compareNumbers(guess, secretNumber);
    }

}

function hasInputError(guess){
    if (isNaN(guess) || inputElement.value.trim() === "") {
        Message("📛 No Number");
        return false;
    }
    if( guess < 1 || guess > 20 ){
        Message("Number must be between 1 and 20");
        return false;
    }
    return true;

}

//logique de comparaison des nombres. Le secret number vs le nombre mis
function compareNumbers(guessNumber, secretNumber) {
    if (guessNumber === secretNumber) {
        Message("🎉 Correct Number");
        document.body.style.backgroundColor = "green";
        hiddenNumber.innerHTML = secretNumber;
        hiddenNumber.classList.add("firework");
        // hiddenNumber.classList.add("big-number");
        if(highscore < score ){
            highScoreElement.textContent = score;
            localStorage.setItem('highscoreStorage', score);
        } 
        localStorage.getItem('highscoreStorage');
        isGameFinished = true;
    } else if (guessNumber > secretNumber) {
        Message("too high");
        decrementeScore(guessNumber);
    } else if (guessNumber < secretNumber) {
        Message("too low");
        decrementeScore(guessNumber);
    }
}

function decrementeScore(guessNumber) {
    if (guessNumber != secretNumber) {
        score -= 1;
        if (score === 0) {
            Message("you are a looser");
            document.body.style.backgroundColor = "red";
            btnCheck.remove();
            isGameFinished = true;
        }
        scoreToChangeElement.innerHTML = score;
    }
}

function resetGame() {
    location.reload();
}

function Message(content) {
    whereToAddMessage.innerHTML = "";
    whereToAddMessage.textContent = content;
}

let numberAlreadyGuessed = [];

function isNumberAlreadyGuessed(guessNumber){
    console.log(numberAlreadyGuessed);
    if(numberAlreadyGuessed.includes(guessNumber)){
        Message("already guess");
        return true;
    } else {
        numberAlreadyGuessed.push(guessNumber);
        addNewNumberAlreadyGuessed(guessNumber);
        Message("continue to guess");
        console.log(numberAlreadyGuessed);
        return false;
    }   
}

function addNewNumberAlreadyGuessed(guessNumber){
    const pNumberGuessed = document.createElement('p');
    sectionNumberGuessed.appendChild(pNumberGuessed);
    pNumberGuessed.classList.add('numberAlreadyGuessed');
    pNumberGuessed.textContent = guessNumber;
}


