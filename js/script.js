const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add("jump") // Adiciona animação de pulo
    setTimeout(() =>{
        mario.classList.remove("jump") // Remove animação de pulo
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') // Pegando bottom do mario, retirando o px da string e com + no inicio transformando string de numero em int

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        // Parando posição do tubo
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        // Parando posição do mario
        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`

        // Mudando imagem para game over
        mario.src = "./images/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        clearInterval(loop) // Encerra o loop quando perde
    }
}, 10)

document.addEventListener('keydown', jump)