
let knygos = [
{	DETEKTYVAI:[
	{
		ISBN:'9786094791550',
		Leidimo_metai:2016,
		Pavadinimas:'Sausra',
		Puslapiu_skaicius:'354 psl.'
	},
	{	
		ISBN:'9786094791246',
		Leidimo_metai:2018,
		Pavadinimas:'Baimė',
		Puslapiu_skaicius:'287 psl.'
	},
	{	
		ISBN:'9786094790676',
		Leidimo_metai:2017,
		Pavadinimas:'Tamsus vanduo',
		Puslapiu_skaicius:'521 psl.'
	},
	{	
		ISBN:'9786094790683',
		Leidimo_metai:2019,
		Pavadinimas:'Vasarnamis su baseinu',
		Puslapiu_skaicius:'521 psl.'
	}
	]
	},
{	ASMENYBES_TOBULINIMAS:[
	{
		ISBN:'9786098254099',
		Leidimo_metai:2019,
		Pavadinimas:'Neribota atmintis',
		Puslapiu_skaicius:'789 psl.'
	},
	{
		ISBN:'9786094271106',
		Leidimo_metai:2015,
		Pavadinimas:'Save keičiančios smegenys',
		Puslapiu_skaicius:'315 psl.'
	},
	{
		ISBN:'9786094791017',
		Leidimo_metai:2018,
		Pavadinimas:'Džiaugsmo knyga',
		Puslapiu_skaicius:'454 psl.'
	},
	{
		ISBN:'9786090403624',
		Leidimo_metai:2012,
		Pavadinimas:'Emocinės laisvės technika: revoliucinė sistema gyvenimui be streso',
		Puslapiu_skaicius:'789 psl.'
	}
	]
	},
{	PASAKOS:[ 
	{
		ISBN:'9789955138501',
		Leidimo_metai:2019,
		Pavadinimas:'Eglė žalčių karalienė',
		Puslapiu_skaicius:'260 psl.'
	},
	{
		ISBN:'9786094403071',
		Leidimo_metai:2015,
		Pavadinimas:'Mano penkių minučių pasakų lobynas',
		Puslapiu_skaicius:'186 psl.'
	},
	{
		ISBN:9786094241246,
		Leidimo_metai:2019,
		Pavadinimas:'Trys paršiukai',
		Puslapiu_skaicius:'16 psl.'
	},
	{
		ISBN:'9789955075523',
		Leidimo_metai:2014,
		Pavadinimas:'Vilkas ir septyni ožiukai',
		Puslapiu_skaicius:'12 psl.'
	}
	]
	}
];
// for(i=0;i<knygos.length;i++){console.log(knygos[i])}; // Isskirsto knygas i kategorijas

knygos.forEach(perenkame);


function perenkame(kategorijos, masyvas){	 

	Object.entries(kategorijos).forEach(([i, knygos]) => {
		console.log("KATEGORIJA - "+i); 
		Object.entries(knygos).forEach(([k, knyga]) => {
			console.log("Numeris.: "+((k*1)+1))
	  		console.log(knyga.ISBN); 
	  		console.log(knyga.Leidimo_metai); 
	  		console.log(knyga.Pavadinimas); 
	  		console.log(knyga.Puslapiu_skaicius); 
		});
	});

	


}



