const body = document.querySelector('body');
const btnChange = document.querySelector('#btnchange');


const changeColor = () => {
    let color = '#';
    const letras = 'ABCDEF';
    const numeros = '0123456789';
    for (let i = 0; i < 6; i++) {
        const aleatorio = Math.random() < 0.5 ? numeros : letras;
        color += aleatorio[Math.floor(Math.random() * aleatorio.length)];
      }
    
      body.style.backgroundColor = color;
 };

btnChange.addEventListener('click', changeColor);





