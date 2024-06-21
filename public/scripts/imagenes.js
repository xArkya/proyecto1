function over() {
    const img = document.getElementById('gustos');
    img.style.opacity = 0;
            setTimeout(() => {
                img.src = './img/imgOver.png';
                img.style.opacity = 1;
            }, 200);
}

function out() {
    const img = document.getElementById('gustos');
    img.style.opacity = 0;
            setTimeout(() => {
                img.src = './img/yo1.jpeg';
                img.style.opacity = 1;
            }, 200);
}