/*  Pegando as informações da class clock-container */
const clockContainer = document.querySelector('.clock-container')

/* Atualizando o relógio  */
const updateClock = () => {
   const present = new Date()  
  /*  Pegando Horas, minutos e Segundos */
   const hours = present.getHours()
   const minutes = present.getMinutes()
   const seconds = present.getSeconds()

    /*  Criando template string que vai aparecer na tela */
    /*  Deixando a string em formato padrão de relógio digital,  */
    /*  ex: 01 segundos em vez de só o 1 segundos */
   const clockHTML =  `
        <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
        <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
        <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    `
    console.log(clockHTML)
    clockContainer.innerHTML = clockHTML
}

/* Chamando a função de atualização do relogio a cada 1000 milissegundos = 1 segundo */
setInterval(updateClock, 1000)


/* Mudando a imagem  */
let time = 5000,
    currentImagemIndex = 0, 
    images = document.querySelectorAll("#slider img"),
    max = images.length;

/* Fazendo a transição entre as imagens */
function netxImage() {

    images[currentImagemIndex].classList.remove("selected")

    currentImagemIndex++

    if(currentImagemIndex >= max)
        currentImagemIndex = 0

    images[currentImagemIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        netxImage()
    }, time)
}

window.addEventListener("load", start)

function run() {
    document.getElementsByClassName("clock-container")
}


/* Para fazer o relogio ficar mudando de posição*/

function animacao(id) {
    document.getElementById(id).style.animation = 'animation: position 2s linear';
}

setInterval(animationPosition, 5000)