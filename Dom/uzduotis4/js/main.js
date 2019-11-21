const place = document.querySelector('#container');

for(let i=0;i<16;i++){
    const objektas = document.createElement('div');
    place.appendChild(objektas);
    objektas.innerHTML='<h5>'+(i+1)+'</h5>';
}

    let divs = document.querySelectorAll('div');
    for(let j = 0; j < divs.length; j++){
        divs[j].onclick = function(e) {
            e.target.style.backgroundColor = sugeneruok()
        }
    }
function sugeneruok() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let spalva = "rgb(" + r + "," + g + "," + b + ")";
    return spalva;
}

