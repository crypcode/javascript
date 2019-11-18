const button = document.querySelector('button');
const insert = document.querySelector('table');


button.addEventListener('click', generate_row);


function generate_row() {
  const task = document.createElement('tr');
  task.textContent = "Sample Text";
  let row = document.getElementById("rowNum").value;
  let value = Number(row);
  for(let i = 0;value>i;i++){insert.appendChild(task);}
  console.log(value);
}
/*
function generate_col() {
  const task2 = document.createElement('td')
  var col = document.getElementById("colNum").value;
  for(j=0;col>j;j++)task.appendChild(task2);
}
*/
