// Global Variables

let pcDisplay = document.getElementById('pc-display');
let pcWait = 'images/pc-wait.jpg';
let pcRock = 'images/pc-rock.jpg';
let pcPaper = 'images/pc-paper.jpg';
let pcScissors = 'images/pc-scissors.jpg';
let pcCrashed = 'images/pc-crashed';

// Functions

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
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Komputer wygrywa!');
    } else if (playerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch gracza. Nieprawidłowy wynik gry.');
    } else {
        printMessage('Nieprawidłowy wynik gry.');
    }
}

function playGame(playerInput) {

    clearMessages();

    // Computer move

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    changeDisplay(randomNumber);

    // Player move

    console.log('Gracz wpisał: ' + playerInput);

   let playerMove = getMoveName(playerInput);

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

// Welcome message

printMessage('Click PLAY to start the game.');

let playground = document.getElementById("playground");
playground.classList.add("beforePlay");

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