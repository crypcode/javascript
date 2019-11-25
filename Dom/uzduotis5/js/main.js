const nuskaityti = document.querySelector('#submit');
const trinti = document.querySelector('#del');
const insert = document.querySelector('tbody');
let selectedRow = null;
//console.log(nuskaityti)
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
//Sukuria irasa lenteleje
function create() {
    data.push(document.getElementById("tema").value);
    data.push(document.getElementById("priority").value);
    data.push(document.getElementById("endData").value);
    data.push(document.getElementById("status").value);
    data.push(document.getElementById("progress").value);
    data.push(document.getElementById("editData").value);
    //console.log(data); //to confirm it has been added to the array

    let table = document.getElementById("data").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = '<i class="fas fa-check-square" onClick="done()"></i>';
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = '<i class="fas fa-check"></i><p class="task">'+data[0]+'</p>';
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = '<span class="'+data[1]+'">'+data[1]+'</span>';
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data[2];
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data[3];
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<div class="progress"><div class="progress-bar" role="progressbar" style="width:'+data[4]+'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data[5];
    cell5 = newRow.insertCell(7);
    cell5.innerHTML = '<button id="del" class="del" onClick="del(this)">Trinti</button><button class="edit">Keisti</button>';
   /* for(let i=0;i<data.length;i++){
        let eilute = document.createElement('tr')
        let stulpelis = document.createElement('td');
        stulpelis.innerHTML=''+data[i]
        insert.appendChild(eilute);
        eilute.appendChild(stulpelis);

    } */
}
//istrina irasa
function del(td) {
     let row = td.parentElement.parentElement;
        document.getElementById("data").deleteRow(row.rowIndex);
        console.log(row)
}

//Ivykdo uzduoti
/*function done() {
    var ikonas = document.getElementsByClassName("fa-chart-bar").style.color = #BDBDBD;
    var ikona2 = document.getElementsByClassName("fa-check-square").style.color = #BDBDBD;
    var text = document.getElementsByClassName("text").style.color = #BDBDBD;
    var text2 =document.getElementsByClassName("text").style.textDecoration = 'line through';
}*/

