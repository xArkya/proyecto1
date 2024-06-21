// CUESTIONARIO

document.getElementById('formBotón').addEventListener('click', function() {
    let countdownElement = document.getElementById('countdown');
    let modal = document.getElementById('modal');
    let form = document.getElementById('form');
    let modalContent = document.getElementById('modalContent');
    let countdown = 3;

    modal.style.display = 'block';
    countdownElement.style.display = 'block';
    countdownElement.textContent = countdown;

    let interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown === 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            form.style.display = 'block';
            modalContent.style.display = 'flex';
        }
    }, 1000);
});

let modal = document.getElementById('modal');
let span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    form.style.display = 'none';
    modal.style.display = 'none';
    modalContent.style.display = 'none';
    countdown = 3;
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        form.style.display = 'none';
        modalContent.style.display = 'none';
        countdown = 3;
    }
};

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let puntaje = 0;

    if (document.getElementById('nombre').value.toLowerCase() === "fabricio" || document.getElementById('nombre').value.toLowerCase() === "fabricio raimondo") {
    puntaje+=2
    };
    if (parseInt(document.getElementById('edad').value) == "20") {
        puntaje+=2
    };
    if (parseInt(document.getElementById('num').value) == "2") {
        puntaje+=2
    };
    if (document.getElementById('serie').value.toLowerCase() === "tower of god") {
        puntaje+=2
    };
    if (document.querySelector('input[name="PoM"]:checked').value === "montaña") {
        puntaje+=2
    };

    document.getElementById('puntaje').innerHTML = `Tu puntaje es<br><div id="puntajeNum">${puntaje}/10<div id="mensaje"></div></div>`;
    switch (puntaje) {
        case 2:
            document.getElementById('mensaje').innerHTML = `Prestá más atención la próxima...`
            break;
        case 4:
            document.getElementById('mensaje').innerHTML = `Bastante mal...`
            break;
        case 6:
            document.getElementById('mensaje').innerHTML = `Masomenos...`
            break;
        case 8:
            document.getElementById('mensaje').innerHTML = `Casi!`
            break;
        case 10:
            document.getElementById('mensaje').innerHTML = `Excelente!`
            break;
        default:
            document.getElementById('mensaje').innerHTML = `Sos málisim@`
    }
})