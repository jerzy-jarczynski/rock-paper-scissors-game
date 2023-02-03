// Global Variables

let pcDisplay = document.getElementById('pc-display');
let pcWait = 'images/pc-wait.jpg';
let pcRock = 'images/pc-rock.jpg';
let pcPaper = 'images/pc-paper.jpg';
let pcScissors = 'images/pc-scissors.jpg';
let pcCrashed = 'images/pc-crashed';

let playerPoints = document.getElementById('playerPoints');
let pcPoints = document.getElementById('pcPoints');
let playerPointsCounter = 0;
let pcPointsCounter = 0;

let radios = document.getElementsByName('radio');

let hardnessLevel = 1;

// Functions

function changeLevel() {

    for (let i = 0, lenght = radios.length; i < lenght; i++) {
    
        if (radios[i].checked) {
            hardnessLevel = radios[i].value;
            return;
        }

    }
}

function changeResultBar() {

    if (playerPointsCounter == 0 && pcPointsCounter == 0) {
        return;
    } else {

        let sumPoints = playerPointsCounter + pcPointsCounter;
        let playerPercent = Math.floor((playerPointsCounter/sumPoints) * 100);

        document.getElementById('resultBar').style.background = 'linear-gradient(90deg, rgb(46, 204, 113) ' + playerPercent +'%, rgb(231, 76, 60) ' + playerPercent + '%)';

    }

}

function getMoveName(argMoveId){
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);

    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        document.getElementById('playerPoints').innerHTML = ++playerPointsCounter;
        printMessage('Ty wygrywasz!');
        changeResultBar();
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        document.getElementById('pcPoints').innerHTML = ++pcPointsCounter;
        printMessage('Komputer wygrywa!');
        changeResultBar();
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        document.getElementById('pcPoints').innerHTML = ++pcPointsCounter;
        printMessage('Komputer wygrywa!');
        changeResultBar();
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        document.getElementById('playerPoints').innerHTML = ++playerPointsCounter;
        changeResultBar();
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        document.getElementById('playerPoints').innerHTML = ++playerPointsCounter;
        changeResultBar();
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        document.getElementById('pcPoints').innerHTML = ++pcPointsCounter;
        printMessage('Komputer wygrywa!');
        changeResultBar();
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch gracza. Nieprawidłowy wynik gry.');
    } else {
        printMessage('Nieprawidłowy wynik gry.');
    }
}

function playGame(playerInput) {

    clearMessages();

    let computerMove;

    let randomHardness = Math.floor(Math.random() * 10 + 1);

    console.log(randomHardness);

    // Computer move

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    // Player move

    // 1 -- ROCK
    // 2 -- PAPER
    // 3 -- SCISSORS

    // 1 > 3, 2 > 1, 3 > 2

    // Names for moves ID

    let playerMove = getMoveName(playerInput);

    console.log('HARDNESS ' + hardnessLevel);

    if (hardnessLevel == 0) {
        if (randomHardness % 3 == 0) {
            if (playerInput == 1) {
                computerMove = getMoveName(3);
                changeDisplay(3);
            } else if (playerInput == 2) {
                computerMove = getMoveName(1);
                changeDisplay(1);
            } else if (playerInput == 3) {
                computerMove = getMoveName(2);
                changeDisplay(2);
            } else {
                computerMove = getMoveName(randomNumber);
                changeDisplay(randomNumber);
            }
        } else {
            computerMove = getMoveName(randomNumber);
            changeDisplay(randomNumber);
        }
    } else if (hardnessLevel == 1) {
        computerMove = getMoveName(randomNumber);
        changeDisplay(randomNumber);
    } else if (hardnessLevel == 2) {
        if (randomHardness % 5 == 0) {
            if (playerInput == 1) {
                computerMove = getMoveName(2);
                changeDisplay(2);
            } else if (playerInput == 2) {
                computerMove = getMoveName(3);
                changeDisplay(3);
            } else if (playerInput == 3) {
                computerMove = getMoveName(1);
                changeDisplay(1);
            } else {
                computerMove = getMoveName(randomNumber);
                changeDisplay(randomNumber);
            }
        } else {
            computerMove = getMoveName(randomNumber);
            changeDisplay(randomNumber);
        }
    } else {
        computerMove = getMoveName(randomNumber);
        changeDisplay(randomNumber);
    }

    // Display moves

    console.log(computerMove);

    printMessage('Mój ruch to: ' + computerMove);

    printMessage('Twój ruch to: ' + playerMove);

    // Game result

    displayResult(computerMove, playerMove);

}

function changeDisplay(argMoveId) {
    if (argMoveId == 1) {
        pcDisplay.src = pcRock;
        return;
    } else if (argMoveId == 2) {
        pcDisplay.src = pcPaper;
        return;
    } else if (argMoveId == 3) {
        pcDisplay.src = pcScissors;
        return;
    } else {
        pcDisplay.src = pcCrashed;
        return;
    }
}

// Event Listeners

document.getElementById('pc').addEventListener('click', function(){
    playground.classList.remove("beforePlay");
    pcDisplay.src = pcWait;
});

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});

document.getElementById('level-easy').addEventListener('change', changeLevel);

document.getElementById('level-medium').addEventListener('change', changeLevel);

document.getElementById('level-hard').addEventListener('change', changeLevel);

// Welcome message

printMessage('Click PLAY to start the game.');

let playground = document.getElementById("playground");
playground.classList.add("beforePlay");

