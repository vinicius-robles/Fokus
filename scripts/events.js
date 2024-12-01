
import { musica, audioVolume, audioPausa, audioPlay } from "./audio.js"; 
import { contagemRegressiva, definirTempoRestante, mostrarTempo } from "./timer.js"; 
import { alterarContexto } from "../script.js"; 


export const focoBt = document.querySelector(".app__card-button--foco"); 
export const curtoBt = document.querySelector(".app__card-button--curto"); 
export const longoBt = document.querySelector(".app__card-button--longo"); 
export const iniciarOuPausarBt = document.querySelector("#start-pause span"); 


const imgPause = document.querySelector(".app__card-primary-butto-icon");


let intervaloId = null;


export function configurarFoco() {
    definirTempoRestante(1500); 
    alterarContexto("foco"); 
    focoBt.classList.add("active"); 
}


export function configurarDescansoCurto() {
    definirTempoRestante(300);
    alterarContexto("descanso-curto");
    curtoBt.classList.add("active");
}


export function configurarDescansoLongo() {
    definirTempoRestante(900);
    alterarContexto("descanso-longo");
    longoBt.classList.add("active");
}


export function iniciarOuPausar() {
    
    if (intervaloId) {
        
        imgPause.src = "/imagens/play_arrow.png"; 
        audioPausa.play(); 
        audioVolume(); 
        zerar(); 
        return; 
    } else {
        
        imgPause.src = "/imagens/pause.png"; 
        audioPlay.play(); 
        audioVolume(); 
        intervaloId = setInterval(contagemRegressiva, 1000); 
        iniciarOuPausarBt.textContent = "Pausar"; 
    }
}


export function controlarMusica() {
    
    if (musica.paused) {
        audioVolume(); 
        musica.play(); 
    } else {
        musica.pause(); 
    }
}


function zerar() {
    clearInterval(intervaloId); 
    iniciarOuPausarBt.textContent = "Começar"; 
    intervaloId = null; 
}


