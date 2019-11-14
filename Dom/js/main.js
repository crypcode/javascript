const button = document.querySelector('button');
const container  = document.querySelector('.container');
const color  = document.querySelector('input');
const antraste  = document.querySelector('input.antraste');
const pastraipa  = document.querySelector('input.pastraipa');
const h  = document.querySelectorAll('h1');
const p  = document.querySelectorAll('p');

button.addEventListener('click', changeColor);

function changeColor() {
    container.style.backgroundColor = color.value;
    for(item of h) {
        item.style.color = antraste.value;
    }
    for(item2 of p) {
        item2.style.color = pastraipa.value;
    }
}





//Fonas
// Antrastes teksto spalva .antraste
// pastraipos teksto spalva .pastraipa