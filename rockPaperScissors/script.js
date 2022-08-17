const computer_guess = ['rock', 'paper', 'scissors'];

const start = document.querySelector('.start');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let result = document.getElementById('result');
let part_1 = document.querySelector('.part-1');
let part_2 = document.querySelector('.part-2');
let go_next = document.querySelector('.go_next');
let final_result = document.querySelector('.final_result');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let computer_ch = document.querySelector('.computer_ch');
let you_ch = document.querySelector('.you_ch');

part_1.style.display = 'none';
part_2.style.display = 'none';
result.style.display = 'none';
final_result.style.display = 'none';

let userChoice = 0;
let compChoice;

start.addEventListener('click', () => {
    start.style.display = 'none';
    part_1.style.display = 'block';
});

go_next.addEventListener('click', () => {
    start.style.display = 'none';
    part_1.style.display = 'none';
    part_2.style.display = 'block';
});

rock.addEventListener('click', () => {
    userChoice = 'rock';
    console.log('user choose', userChoice);
    check_result();
});

paper.addEventListener('click', () => {
    userChoice = 'paper';
    console.log('user choose', userChoice);
    check_result();
});

scissors.addEventListener('click', () => {
    userChoice = 'scissors';
    console.log('user choose', userChoice);
    check_result();
});

function check_result() {
    if (userChoice != 0) {
        result.style.display = 'block';
    }
}

result.addEventListener('click', () => {
    let value = rand_no();
    compChoice = computer_guess[value];
    console.log('Computer choose', compChoice);
    if (userChoice === compChoice) {
        final_results();
        com_choose();
        first.innerHTML = 'Both choose the same option';
        second.innerHTML = 'It is a tie';
    }
    if ((userChoice === 'rock') && (compChoice === 'scissors')) {
        final_results();
        com_choose();
        first.innerHTML = 'Rock wins against scissors.';
        second.innerHTML = 'You win!! Computer lose!!';
    }
    if ((userChoice === 'rock') && (compChoice === 'paper')) {
        final_results();
        com_choose();
        first.innerHTML = 'Paper wins against rock.';
        second.innerHTML = 'You lose!! Computer win!!';
    }
    if ((userChoice === 'scissors') && (compChoice === 'paper')) {
        final_results();
        com_choose();
        first.innerHTML = 'Scissors win against paper.';
        second.innerHTML = 'You win!! Computer lose!!';
    }
    if ((userChoice === 'scissors') && (compChoice === 'rock')) {
        final_results();
        com_choose();
        first.innerHTML = 'Rock wins against scissors.';
        second.innerHTML = 'You lose!! Computer win!!';
    }

    if ((userChoice === 'paper') && (compChoice === 'rock')) {
        final_results();
        com_choose();
        first.innerHTML = 'Paper wins against rock.';
        second.innerHTML = 'You win!! Computer lose!!';
    }
    if ((userChoice === 'paper') && (compChoice === 'scissors')) {
        final_results();
        com_choose();
        first.innerHTML = 'Scissors win against paper.';
        second.innerHTML = 'You lose!! Computer win!!';
    }
});

function rand_no() {
    return (Math.floor(Math.random() * computer_guess.length));
}

function final_results() {
    start.style.display = 'none';
    part_1.style.display = 'none';
    part_2.style.display = 'none';
    final_result.style.display = 'block';
}

function com_choose() {
    you_ch.textContent = ('You choose: ' + userChoice);
    computer_ch.textContent = ('computer choose: ' + compChoice);
}