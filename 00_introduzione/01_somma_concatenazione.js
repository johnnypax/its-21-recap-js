let prodotto1 = 10;
let prodotto2 = 20;
let prodotto3 = 30;

//JavaScript non è Type Safe
prodotto2 = 69;
prodotto2 = "Giovanni";

// console.log(prodotto2);

//Tipi primitivi JavaScript
let numero = 15;            //number
let stringa = "Giovanni";   //string
let booleano = true;        //bool

//Concatenazione
console.log("Ciao" + stringa);

//Interpolazione Alt + 9 + 6
console.log(`Ciao ${stringa}`);

let eta = 19;
console.log(`Sei: ${eta > 18 ? "Maggiorenne" : "Minorenne"}`)