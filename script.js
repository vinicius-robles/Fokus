
import { musica } from "./scripts/audio.js"; 
import { mostrarTempo } from "./scripts/timer.js"; 
import { configurarFoco, configurarDescansoCurto, configurarDescansoLongo, iniciarOuPausar, controlarMusica, focoBt, curtoBt, longoBt } from "./scripts/events.js"; 


const html = document.querySelector("html"); 
const banner = document.querySelector(".app__image"); 
const titulo = document.querySelector(".app__title"); 
const botoes = document.querySelectorAll(".app__card-button"); 
const startPauseBt = document.querySelector("#start-pause"); 
const musicaFocoInput = document.querySelector("#alternar-musica"); 


musica.loop = true;


focoBt.addEventListener("click", configurarFoco); 
curtoBt.addEventListener("click", configurarDescansoCurto); 
longoBt.addEventListener("click", configurarDescansoLongo); 
startPauseBt.addEventListener("click", iniciarOuPausar); 
musicaFocoInput.addEventListener("change", controlarMusica); 


export function alterarContexto(contexto) {
    mostrarTempo(); 
    botoes.forEach(function (contexto) { 
        contexto.classList.remove("active");
    });
    html.setAttribute("data-contexto", contexto); 
    banner.setAttribute("src", `/imagens/${contexto}.png`); 
    switch (contexto) { 
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                                 <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
    }
}


mostrarTempo();