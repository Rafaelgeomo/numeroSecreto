const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //API de reconhecimento de voz

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak); //adicionado um evento que vai pegar tudo o q falamos atraves do 'result' 

function onSpeak(e){ //Essa função onSpeak vai exibir tudo que eu estou falando no console.
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute){ // aqui criamos uma função para mostrar o que pegamos da função onSpeak para mostrar na tela.
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}


