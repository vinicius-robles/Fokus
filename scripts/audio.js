
export const musica = new Audio("./sons/luna-rise-part-one.mp3");


export const audioPlay = new Audio("/sons/play.wav");
export const audioPausa = new Audio("/sons/pause.mp3");
export const audioTempoFinalizado = new Audio("/sons/beep.mp3");


export function audioVolume() {
    
    audioPlay.volume = 0.25;
    audioPausa.volume = 0.25;
    audioTempoFinalizado.volume = 0.25;
    musica.volume = 0.25;
}