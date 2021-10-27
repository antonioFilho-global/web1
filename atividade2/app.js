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

const mudarImagem = () => {
    document.body.style.backgroundImage = "url('https://picsum.photos/600/300')"
}

function start() {
    setInterval(() => {
        mudarImagem()
    }, 2000)
}

window.addEventListener("load", start)


/* Chamando a função de atualização do relogio a cada 1000 milissegundos = 1 segundo */
setInterval(updateClock, 1000)
setInterval(mudarImagem)