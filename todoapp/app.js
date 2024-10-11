const inputTarea = document.getElementById('tareatxt');
const divTareas = document.getElementById('tareas');
const myform = document.querySelector('#myform');

const arrayTareas = localStorage.getItem('tareas')
                        ? JSON.parse(localStorage.getItem('tareas'))
                        : [];
//join a string
//parse convierte a objeto

const addTarea = () =>{
    const tarea = inputTarea.value;
    inputTarea.value = '';
    arrayTareas.push(
    {
        tarea: tarea,
        estado: 'danger',
        id: Math.floor(Math.random() * 10000)
    });

    construyeDivs();
    localStorage.setItem('tareas', JSON.stringify(arrayTareas))



}

const construyeDivs = () => {
    divTareas.innerHTML = ''
    arrayTareas.forEach(tarea => {
        divTareas.appendChild(createTarea(tarea));
    })
}



const deleteItem = (e) => {
    const cDiv = e.target;
    const id = cDiv.getAttribute('data-id');
    const encontrado = arrayTareas.findIndex(tarea => tarea.id === Number(id));
    const pa = e.target.parentElement;
    pa.remove();
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
}

const createTarea = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    p.innerText = tarea.tarea;
    button.innerText = 'Eliminar';
    button.addEventListener('click', deleteItem)
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data-id' , tarea.id)
    div.addEventListener('click' , changeColor);
    return div;
};
const changeColor = (e) => {
    const cDiv = e.target;
    const id = cDiv.getAttribute('data-id');
    const encontrado = arrayTareas.findIndex(tarea => tarea.id === Number(id));
    arrayTareas[encontrado].estado = "warning";
    if(cDiv.classList.contains('danger')){
        cDiv.classList.remove('danger');
        cDiv.classList.add('warning');
    } else if (cDiv.classList.contains('warning')){
        cDiv.classList.remove('warning');
        cDiv.classList.add('success');
        arrayTareas[encontrado].estado = "success";
    }
    localStorage.setItem('tareas', JSON.stringify(arrayTareas)); 
    
}
construyeDivs();
myform.addEventListener('submit' , (e) =>{
    e.preventDefault();
    addTarea();
})