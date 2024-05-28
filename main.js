let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll
('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')





let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function  setSlider(){
    let itemOld = container.querySelector('.active').classList.remove('active')

    let dotsOld = indicator.querySelector('ul .active').classList.remove('active')

    indicator.querySelector('.number').innerHTML = '0' +  (active + 1)

    dots[active].classList.add('active')

}

nextButton.onclick = () => {
    list.style.setProperty('--calculate', 1)
    active = active + 1 > lastPosition ? firstPosition : active + 1
    setSlider()

    items[active].classList.add('active')   
}

prevButton.onclick = () =>{
    list.style.setProperty('--calculate', -1)

    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()

    items[active].classList.add('active')
}

