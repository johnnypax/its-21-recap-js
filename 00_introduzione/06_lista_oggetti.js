let elenco = [
    {
        titolo: "La compagnia dell'anello",
        autore: "JRRT"
    },
    {
        titolo: "Le due torri",
        autore: "JRRT"
    },
    {
        titolo: "Harry Potter",
        autore: "Rowling"
    },
]

//Task1: CCercare tutti i libri di JRRT
//Task2: Contare tutti i libri di JRRT

// for(let l of elenco){
//     if(l.autore == "JRRT")
//         console.log(l)
// }

let contatore = 0;
for(let l of elenco){
    if(l.autore == "JRRT")
        contatore++;
}

console.log(contatore)