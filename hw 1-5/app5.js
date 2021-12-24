const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeBtn = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click', (evt) => {
    evt.preventDefault
    screens[0].classList.add('up')
    
})
timeBtn.addEventListener('click', evt => {
    if (evt.target.classList.contains('time-btn')) {
        time = parseInt(evt.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})
board.addEventListener('click', evt => {
    if (evt.target.classList.contains('circle')) {
        score++
        evt.target.remove()
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    setTime(time)
}
function decreaseTime() {
    if (time === 0) {
            finishGame()
        } else {
        let current = --time
        if (current < 10) {
           current = `0${current}` 
        }
        setTime(current)
        }
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {
    timeEl.parentNode.classList.add('hide')
   board.innerHTML = `<h1>Score:<span class="primary">${score}</span></h1>` 
}
function createRandomCircle() {
    const circle = document.createElement('div')

    const size = getRandom(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x =  getRandom(0, width - size)
    const y = getRandom(0, height - size)

    circle.classList.add('circle')
    circle.style.background = getRandomHexColor()
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    
    board.append(circle)
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}