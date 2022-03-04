const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timer = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

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
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`; 
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

    board.append(circle);
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}