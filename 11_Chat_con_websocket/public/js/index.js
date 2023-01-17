const socket = io();
let username = prompt('Ingrese su nombre');

const chatBox = document.getElementById('chatBox')
chatBox.addEventListener('keyup', (evt) => {
    if (evt.key === "enter") {
        if (chatBox.value.trim().length) {
            
        }
    }
});