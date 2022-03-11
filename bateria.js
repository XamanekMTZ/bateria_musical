
function quitarTransicion(e) {
    if ( e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function reproducirSonido(e) {
    const sonido = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!sonido) return;
    
    key.classList.add('playing');
    sonido.currentTime = 0;
    sonido.play();
}

function pushSonido(e) {
    const thisDiv = e.currentTarget;
    const keyCode = thisDiv.dataset.key;
    const sonido = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    if (!sonido) return;
    
    thisDiv.classList.add('playing');
    sonido.currentTime = 0;
    sonido.play();
}

const pushButtons = document.querySelectorAll('.push');

const keys = Array.from(document.querySelectorAll('.key'));

pushButtons.forEach(button => button.addEventListener('click', pushSonido));

keys.forEach(key => key.addEventListener('transitionend', quitarTransicion));

window.addEventListener('keydown', reproducirSonido);

