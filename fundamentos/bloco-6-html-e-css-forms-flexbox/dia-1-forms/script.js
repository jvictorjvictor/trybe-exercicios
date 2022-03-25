let button = document.querySelector('#send-info');

/* button.addEventListener('click', function cancelClick (event) {
    event.preventDefault()
}) */

const popUp = document.querySelector('#answer').value.length
const invalidPopUp = popUp > 500

function popUpAlert() {
    if (invalidPopUp) {
        return false;
    }
    else {
        return true;
    }
}

button.addEventListener('click', (eve) => {
    eve.preventDefault();
    const validation = popUpAlert();
    if (validation === false) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
})