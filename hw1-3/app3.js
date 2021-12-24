const btnDown = document.querySelector('.down-button')
const btnUp = document.querySelector('.up-button')
const sidebarEl = document.querySelector('.sidebar')
const slideMain = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = slideMain.querySelectorAll('div').length
console.log(slidesCount)
let activeIndex = 0
console.log(sidebarEl.style.top = `-${(slidesCount - 1) * 100}vh`)
sidebarEl.style.top = `-${(slidesCount - 1) * 100}vh`

btnUp.addEventListener('click', () => {
    changeSlide('up')
})
btnDown.addEventListener('click', () => {
    changeSlide('down')
})
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') 
    { changeSlide('up') }
    else if (event.key === 'ArrowDown')
         { changeSlide('down') }
})
function changeSlide(dir) {
    if (dir === 'up') {
        activeIndex++
        if (activeIndex === slidesCount) {
            activeIndex = 0
        }
    } else if (dir === 'down') {
        activeIndex--
        if (activeIndex < 0) {
            activeIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
        
    slideMain.style.transform = `translateY(-${activeIndex * height}px) `
    sidebarEl.style.transform = `translateY(${activeIndex * height}px) `
}