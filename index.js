const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');

startBtn.addEventListener('click', (event) => {
    event.preventDefault;
    screens[0].classList.add('up')
})

