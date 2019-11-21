const nuskaityti = document.querySelector('#submit');
const insert = document.querySelector('tbody');
console.log(nuskaityti)
nuskaityti.addEventListener('click', create);
// Rodo arba paslepia forma
function show() {
    var x = document.getElementById("dataForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var data = [];

function create() {
    data.push(document.getElementById("tema").value);
    data.push(document.getElementById("priority").value);
    data.push(document.getElementById("endData").value);
    data.push(document.getElementById("status").value);
    data.push(document.getElementById("progress").value);
    data.push(document.getElementById("editData").value);
    console.log(data); //to confirm it has been added to the array
    for(let i=0;i<data.length;i++){
        let eilute = document.createElement('tr')
        let stulpelis = document.createElement('td');
        stulpelis.innerHTML=''+data[i]
        insert.appendChild(eilute);
        eilute.appendChild(stulpelis);

    }
}



