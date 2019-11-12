/* 1.Užduotis:
Pradiniai duomenys: Ankstesnės pamokos metu sukurtas knygų katalogas
1.1 Išvesti knygas, kurios išleistos 2018 m.
1.2 Išvesti knygų kategorijas su pigiausiomis knygomis. (Kategorijos pavadinimas: Pigiausios knygos pavadinimas)
1.3 Apvalinkite knygų katalogo kainas iki dviejų skaičių po kablelio
1.3 Sukurti knygos paiešką pagal pavadinimą. Paieškos užklausa priskiriama konstantai. Išvedama visa informacija apie surastą knygą.
*/


let knygos = [
{	DETEKTYVAI:[
	{
		ISBN:'9786094791550',
		Leidimo_metai:2016,
		Pavadinimas:'Sausra',
		Puslapiu_skaicius:'354 psl.',
		Kaina: 7.50
	},
	{	
		ISBN:'9786094791246',
		Leidimo_metai:2018,
		Pavadinimas:'Baimė',
		Puslapiu_skaicius:'287 psl.',
		Kaina: 6.50
	},
	{	
		ISBN:'9786094790676',
		Leidimo_metai:2017,
		Pavadinimas:'Tamsus vanduo',
		Puslapiu_skaicius:'521 psl.',
		Kaina: 3.80
	},
	{	
		ISBN:'9786094790683',
		Leidimo_metai:2019,
		Pavadinimas:'Vasarnamis su baseinu',
		Puslapiu_skaicius:'521 psl.',
		Kaina: 12.50
	}
	]
	},
{	ASMENYBES_TOBULINIMAS:[
	{
		ISBN:'9786098254099',
		Leidimo_metai:2019,
		Pavadinimas:'Neribota atmintis',
		Puslapiu_skaicius:'789 psl.',
		Kaina: 11.70
	},
	{
		ISBN:'9786094271106',
		Leidimo_metai:2015,
		Pavadinimas:'Save keičiančios smegenys',
		Puslapiu_skaicius:'315 psl.',
		Kaina: 12.10
	},
	{
		ISBN:'9786094791017',
		Leidimo_metai:2018,
		Pavadinimas:'Džiaugsmo knyga',
		Puslapiu_skaicius:'454 psl.',
		Kaina: 10.00
	},
	{
		ISBN:'9786090403624',
		Leidimo_metai:2012,
		Pavadinimas:'Emocinės laisvės technika: revoliucinė sistema gyvenimui be streso',
		Puslapiu_skaicius:'789 psl.',
		Kaina: 9.10
	}
	]
	},
{	PASAKOS:[ 
	{
		ISBN:'9789955138501',
		Leidimo_metai:2019,
		Pavadinimas:'Eglė žalčių karalienė',
		Puslapiu_skaicius:'260 psl.',
		Kaina: 14.90
	},
	{
		ISBN:'9786094403071',
		Leidimo_metai:2015,
		Pavadinimas:'Mano penkių minučių pasakų lobynas',
		Puslapiu_skaicius:'186 psl.',
		Kaina: 7.30
	},
	{
		ISBN:'9786094241246',
		Leidimo_metai:2019,
		Pavadinimas:'Trys paršiukai',
		Puslapiu_skaicius:'16 psl.',
		Kaina: 5.50
	},
	{
		ISBN:'9789955075523',
		Leidimo_metai:2014,
		Pavadinimas:'Vilkas ir septyni ožiukai',
		Puslapiu_skaicius:'12 psl.',
		Kaina: 2.50
	}
	]
	}
];

// -------------------------------------------------Uzduotis 1.1
/*
for(kategorija of knygos){
	for(duomenys in kategorija){
		//console.log(duomenys)
		for(knyga of kategorija[duomenys])
			//console.log(knyga)
				for(info in knyga) {
					if(info == 'Leidimo_metai'){    //Lygina ar yra leidimo metai savybe
						//console.log(info)
						if(knyga[info] == 2018){	//ar yra savybe su 2018m.
							for(atsakymas in knyga)
							console.log(atsakymas+ ' : '+knyga[atsakymas])

						}
					}
				}
						
					
					
	}
};
*/
//------------------------------------------------- Uzduotis 1.2
for(kategorija of knygos){
	for(pavadinimai in kategorija){
		console.log("*********************")
		console.log(pavadinimai) // isveda kategoriju pavadinimus
		console.log("*********************")
		for(savybes of kategorija[pavadinimai]){
			//console.log(savybes) // isveda objektus su ju savybemis
			for(test in savybes){
				if(test == 'Kaina'){
						//console.log(savybes[test])
						let kainos = []
						kainos.push(savybes[test])
						console.log(kainos)
					
			}
			}
		}
	}
}