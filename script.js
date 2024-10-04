let block1 = document.querySelector('.first')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block1.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})

let block2 = document.querySelector('.second')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block2.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})

let block3 = document.querySelector('.third')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block3.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})