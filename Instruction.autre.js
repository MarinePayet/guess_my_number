// 1 = > choisir un nombre a deviner
// => score départ = 20
// 2 => si nb trop grand => afficher "tpp high!" et baisse le score de 1  et enregistrer le num choisi
// 3 => si nb trop petit => afficher "TOO LOW" et baisse le score de 1.  enregistrer le num choisi
//4 => si déjà essayer => Afficher = déjà testé .
// 5 => quand num trouvé = background passe en vert . Le point d'interrogation devient le nombre
// score devient le highscore.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(0,20));


//choisir le nombre a deviner 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const secretNumber = getRandomInt(0,20);
console.log(secretNumber);


let inputElement = document.querySelector('.guess');
console.log(inputElement);

function onButtonClick() {
    console.log(typeof inputElement.value);
    const guess = Number(inputElement.value);
    console.log(guess);
    if (isNaN(guess)) {
        console.log('This is not a number !');
    }
    compareNumbers(guess, secretNumber);
};


function compareNumbers(guessNumber, secretNumber){
    if(guessNumber === secretNumber){
        console.log('you win');
    } else if (guessNumber > secretNumber){
        console.log('too high')
    } else if (guessNumber < secretNumber){
        console.log('too low');
    }
}


const btnCheck = document.querySelector('.check');
const inputValue = document.querySelector('.guess');
const whereToAdd = document.querySelector('.message');
const newP = document.createElement('p');
newP.textContent = 'Write a Number';

btnCheck.addEventListener('click', () => {
    if(inputValue.value.trim() === ''){
        whereToAdd.innerHTML ="";
        whereToAdd.appendChild(newP);
    }
    return inputValue.value; 

// });


console.log(inputValue.value);


const hiddenNumber = document.querySelector('.number');
hiddenNumber.innerHTML = '🥸';

const scoreToChange = document.querySelector('.score');
scoreToChange.innerHTML = '40';




