const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timer = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;
const colors = ['#EA643D', '#FFAA0C', '#F2DB4E', '#4FEA5A', '#30EDB0', '#64D1EA', '#52A9F2', '#BB6CE1', '#E857C9', '#F9207F'];

const shoot = new Audio();
shoot.src = './assets/sound/blaster.mp3';

const gameSd = new Audio();
gameSd.src = './assets/sound/gameOver.mp3';
gameSd.loop = false;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
        shoot.play();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timer.innerHTML = `00:${value}`;
}

function finishGame() {
    timer.parentNode.classList.add('hide');
    gameSd.play();
    board.innerHTML = `<div class="end_table">
    <h1>Score: <span class="primary">${score}</span></h1>
    <button class="btn-try-again">Try again</button>
    </div>`

    const btnTryAgain = document.querySelector('.btn-try-again');
    btnTryAgain.addEventListener('click', tryAgain);
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandom(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const h = getRandom(0, height - size);
    const w = getRandom(0, width - size);
    circle.classList.add('circle');
    circle.style.height = `${size}px`;
    circle.style.width = `${size}px`;
    circle.style.top = `${h}px`;
    circle.style.left = `${w}px`;
    const color = getRandomColor();
    circle.style.background = color;

    board.append(circle);
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const tryAgain = () => {
    window.location.reload();
}

function theGame() {
    function shoot() {
        const circle = document.querySelector('.circle');

        if (circle) {
            circle.click();
        }   
    }

    setInterval(shoot, 50);
}

