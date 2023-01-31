window.addEventListener('keydown', playSound);
// ejecuta la logica al presionar la tecla
function playSound(e) {
    // select by datakey ID of the elements, using attribute selector[] both audio and key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // stop function
    if (!audio) return;
    if (!key) return;
    // currentTime to play the sound even if it has not finished and play
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
// cuando el eventListener equivale a transitionend, ejecuta el remove class
function removeTransition(e) {
    if (e.type == 'transitioned') {
        return;
    }
    e.target.classList.remove('playing');
};
const keys = document.querySelectorAll('.key');
/// por cada key del node List keys, agrega un event listener para remover transition cuando termina ejecutando funcion removeTransition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));