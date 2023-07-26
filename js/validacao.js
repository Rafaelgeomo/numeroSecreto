function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chute.toUpperCase()==='GAME OVER' || 'Qual o numero secreto'){
        document.body.classList.add("game-over")
        document.body.innerHTML =`
        <h2>GAME OVER !!!</h2>
        <h3>Que pena, o número secreto era ${numeroSecreto}</h3>
        <h3>Pressione o botão para tentar novamente</h3>
        <button id="jogar-novamente" class="btn-game-over">Jogar Novamente</button>
        `
    }else if (chuteForInvalido(numero)){
        elementoChute.innerHTML += "<div>Valor inválido</div>"
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`
        return
    }
   
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"> </i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"> </i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

// function gameOver (chute){
//     if (chute === "game over" || chute === "o jogo acabou"){
//         document.body.innerHTML = `
//         <h2>Game Over!!!</h2>
//         <h3>Que pena, o número secreto era ${numeroSecreto}</h3>
//         <h3>Pressione o botão para tentar novamente</h3>
//         <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
//         `
//         document.body.style.backgroundColor = "#000000";

//     }
// }
document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})