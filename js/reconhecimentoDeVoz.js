const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //API de reconhecimento de voz

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak); //adicionado um evento que vai pegar tudo o q falamos atraves do 'result' 

function onSpeak(e){ //Essa função onSpeak vai exibir tudo que eu estou falando no console.
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaSeOChuteEhValido(chute);
    fimDoJogo(chute);

}

function exibeChute(chute){ // aqui criamos uma função para mostrar o que pegamos da função onSpeak para mostrar na tela.
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

function fimDoJogo(chute) {
    if (chute === "game over") {
        document.body.classList.add("game-over")
        document.body.innerHTML = `
        <h2>GAME OVER !!!</h2>
        <h3>Que pena, o número secreto era ${numeroSecreto}</h3>
        <h3>Pressione o botão para tentar novamente</h3>
        <button id="jogar-novamente" class="btn-game-over">Jogar Novamente</button>
        `
    }
}

recognition.addEventListener('end', () => recognition.start());


