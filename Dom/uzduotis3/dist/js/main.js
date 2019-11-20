const generuoti = document.querySelector('button.generuoti');
const sumaisyti = document.querySelector('button.sumaisyti');
const vietos = document.querySelector('ul');

generuoti.addEventListener('click', generuoti_foto);
sumaisyti.addEventListener('click', maisyti);

let foto = ['foto1', 'foto2', 'foto3', 'foto4', 'foto5', 'foto6', 'foto7', 'foto8', 'foto9', 'foto10', 'foto11'];

function generuoti_foto() {
    for(let i=0;i<foto.length;i++){
        const vieta = document.createElement('li');
        const fotos = document.createElement('img');
        fotos.className = "img-thumbnail";
        fotos.src = 'img/'+foto[i]+'.jpg';
        vietos.appendChild(vieta);
        vieta.appendChild(fotos);
    }

}

function paslepti() {
    let hide = document.getElementById("button1");
    if (hide.style.display === "block") {
        hide.style.display = "none";
    } else {
        hide.style.display = "none";
    }
}
function maisyti() {
    let naujas = foto
    naujas.sort(function () {
        return 0.3 - Math.random()
    });
    console.log(naujas)

    const select = document.querySelectorAll('img');
                for(let i=0; i<naujas.length; i++){
                  select[i].src='img/'+naujas[i]+'.jpg' }}
/*function maisyti(){
    let j,x,i;
    for(i=foto.length - 1;i > 0;i--){
        j = Math.floor(Math.random() * (i + 1));
        x = foto[i];
        foto[i] = foto[j];
        foto[j] = x;
    }
    const naujas = document.querySelector('img');
    naujas.src='img/'+foto[j]+'.jpg'
}*/

