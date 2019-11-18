//Elementu kurimas
const button = document.querySelector('button');
const addTask = document.querySelector('input');
const tasks = document.querySelector('ul');
const delTask = document.querySelector('button.button2');

button.addEventListener('click', addElement);

function addElement() {
    for(let i=0; i>2;i++){
    const task = document.createElement('li');
    task.textContent=addTask.value;
    tasks.appendChild(task);}
}
//Elementu deletinimas
delTask.addEventListener('click', deleteTheTask);
function deleteTheTask() {
    const lasTask = document.querySelector('li:last-child');
    tasks.removeChild(lasTask);
}


/*
const button = document.querySelector('button');
const container  = document.querySelector('.container');
const color  = document.querySelector('input');
const vardas  = document.querySelector('input.tekstas');
const text = document.querySelector('p.text')
const antraste  = document.querySelector('input.antraste');
const pastraipa  = document.querySelector('input.pastraipa');
const h  = document.querySelectorAll('h1');
const p  = document.querySelectorAll('p');

button.addEventListener('click', changeColor);

function changeColor() {
    text.innerHTML = vardas.value;
    container.style.backgroundColor = color.value;
    for(item of h) {
        item.style.color = antraste.value;
    }
    for(item2 of p) {
        item2.style.color = pastraipa.value;
    }
}
*/
/*
const link = document.querySelectorAll('a');
    for(linkas of link){
        linkas.href = 'http://kitm.lt';
    }
*/

//Fonas
// Antrastes teksto spalva .antraste
// pastraipos teksto spalva .pastraipa