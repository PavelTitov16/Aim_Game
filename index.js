const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 30;
let score = 0;
const timer = document.querySelector('#time');
const board = document.querySelector('#board');

startBtn.addEventListener('click', (event) => {
    event.preventDefault;
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screen[1].classList.add('up');
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
    timer.innerHTML = `00:${time}`;
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        setTimeout(current);
    }
}

function setTime(value) {
    timer.innerHTML = `00:${value}`;
}

function finishGame() {

}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandom(10, 60);
    const { width, height } = board.getBoundingClientrect();
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