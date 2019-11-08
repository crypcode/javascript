
"use strict"
//let vardas = "Martynas";
//let pirkiniai = ["duona", "sviestas", "druskos", "aliejus", "cesnakas"];
/*let zmogus = {
	akis:2,
	kojas:2,
	vardas:"Martynas",
	savybes:{
		iq:'nezinomas',
		ugis:'2m.'
	}
}
let pirkiniai = [
	{
		pavadinimas:'Labai gera preke',
		kiekis:'3 vnt.',
	},
	{
		pavadinimas:'Labai gera preke',
		kiekis:'122 vnt.',
	}
];

let kiekis = 1;

console.log(kiekis ? "Preke yra" : "prekes nera") */
/*
var vardai = 'ieva, milda, petras';
vardai = vardai.split(',');
//vardai = vardai.join('+')
vardai.push('Andriucha');
vardai.pop();
vardai.shift();
vardai.unshift('Paulius');
//vardai.splice(1,1);
console.log(vardai); */

/*let vaisiai = ['obuolys', 'bananas','kriause','braske', 'zemuoge', 'slyva', 'avietes', 'granata', 'greifurtas', 'melionas'];
vaisiai.splice(5,1);
vaisiai.splice(5,0,'vaisius1','vaisius2');
console.log(vaisiai); */

//let vidurkis = 15;
//let lankomumas = 6;
/*if (vidurkis == 10){
	console.log("Puikus mokinys");
} else if ( vidurkis <= 9){
	console.log("geras mokinys");
} else if (vidurkis <= 7){
	console.log("normalus mokinys");
}else if (vidurkis = 6){
	console.log("patenkinamas mokinys");
}
	
 else{
	console.log("blogas mokinys");
} */
/*switch (vidurkis) {
	case 10>:
	  console.log("netinkamas pazymys");
	  break;
    case 10:
      console.log("Puikus mokinys");
      break;
    case 9:
      console.log("Puikus mokinys");
      break;
    case 8:
      console.log("geras mokinys");
      break;
    case 7:
      console.log("norm mokinys");
      break;
    case 6:
      console.log("patenkinamas mokinys");
      break;    
    default:
      console.log("Blogas mokinys");
  }*/

/* let prekes = ['Pele', 'Klaviatura', 'Monitorius', 'Garso koloneles', 'Web kamera', 'Wifi adapteris', 'Garso plokste', 'Vaizdo plokste',
			 'Atminties kortele', 'Antivirusine'];

let atsakymas = prompt("Koks jusu vardas?");
console.log(atsakymas); */

/*(for(let i=0;i<prekes.length;i++){console.log(vardai[i])
};*/

/* FOR CIKLAS
let sveciuKiekis = prompt("Kiek bus sveciu?"); // Kiek bus sveciu
let svecias = []; // sveciu masyvas
for(let i=0;i<sveciuKiekis;i++){
	svecias[i]= prompt("Vardas")
}; //sveciu vardai
for(let i=0; i<svecias.length;i++){
	console.log(svecias[i])
}; //isvedimas
*/

/*for(let vardas of vardai){ // sukuria kintamaji ir nuskaito jo elementus
	console.log(vardas);    
} */

// Uzdavinys 1----------------------------

let dalykuSkaicius = prompt("Kiek bus dalyku?") ; // dalyku skaicius
let dalykai = []; //dalyku masyvas
let ivertinimas = [];
let zodinis = {
	1: "vienetas",
	2: "du",
	3: "trys",
	4: "keturi",
	5: "penki",
	6: "sesi",
	7: "septyni",
	8: "astuoni",
	9: "devyni",
	10: "desimt"
}
for (let i=0;i<dalykuSkaicius;i++){ //tiek dalyku koks yra ju skaicius
	dalykai[i] = prompt("Dalyku pavadinimas");
	ivertinimas[i] = prompt("Ivertinimas");
};
for(let i=0; i<ivertinimas.length;i++){
	if(ivertinimas[i]==1){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[1] );
	} 
	else if(ivertinimas[i]==2){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[2] );
		}
	else if(ivertinimas[i]==3){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[3] );
		}
	else if(ivertinimas[i]==4){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[4] );
		}
	else if(ivertinimas[i]==5){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[5] );
		}
	else if(ivertinimas[i]==6){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[6] );
		}
	else if(ivertinimas[i]==7){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[7] );
		}
	else if(ivertinimas[i]==8){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[8] );
		}
	else if(ivertinimas[i]==9){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[9] );
		}
	else if(ivertinimas[i]==10){
		console.log(dalykai[i] + " - " + ivertinimas[i] + " - " + zodinis[10] );
		}	
	} // for pabaiga