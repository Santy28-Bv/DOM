const inputAlto = document.querySelector('#height');
const inputAncho = document.querySelector('#width');
const inputRadio = document.querySelector('#radius');
const inputSombra = document.querySelector('#shadow');
const figure = document.querySelector('.container');

// Actualizar altura
inputAlto.addEventListener('input', (event) => {
    figure.style.height = `${event.target.value}px`;
});

// Actualizar anchura
inputAncho.addEventListener('input', (event) => {
    figure.style.width = `${event.target.value}px`;
});

// Actualizar radio del borde
inputRadio.addEventListener('input', (event) => {
    figure.style.borderRadius = `${event.target.value}px`;
});

// Actualizar sombra (blur)
inputSombra.addEventListener('input', (event) => {
    const blur = event.target.value;
    figure.style.boxShadow = `10px 10px ${blur}px rgba(0, 0, 0, 0.5)`; 
});