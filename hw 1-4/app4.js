const board = document.querySelector('#board')
const colors = ['#e640d8', '#0ee944', '#0e7fe9', '#cdf04d', '#f04d55']
const SQUARES_NUMBER = 300

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => setColor(square))  
    square.addEventListener('mouseleave', () => removeColor(square)) 
    board.append(square)
}
function setColor(elm) {
    elm.style.backgroundColor = getColor()
    elm.style.boxShadow = `0 0 2px ${getColor()}, 0 0 10px ${getColor()}`
}
function removeColor(elm) {
    elm.style.backgroundColor = '#1d1d1d'
    elm.style.boxShadow = '0 0 2px #000000'
}
function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}