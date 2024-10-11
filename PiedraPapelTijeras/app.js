const imagenes = document.querySelectorAll('.imagenes img');
const imagUser = document.querySelector('#choiceUser'); 

const getChoiceUser = (e) => {
    const image = e.target; 
    const imageUser = image.getAttribute('data-id'); 
    imagUser.src = image.src; 
}

imagenes.forEach(image => image.addEventListener('click', getChoiceUser));
