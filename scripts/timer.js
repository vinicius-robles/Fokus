
import { audioTempoFinalizado } from "./audio.js";


export let tempoDecorridoEmSegundos = 1500;


const tempoNaTela = document.querySelector("#timer");


export const contagemRegressiva = () => {

    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play();
        audioVolume();

        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

export function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString("pt-BR", { minute: "2-digit", second: "2-digit" });
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

export function definirTempoRestante(novoTempo) {
    tempoDecorridoEmSegundos = novoTempo;
}