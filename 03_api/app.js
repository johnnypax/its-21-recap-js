//NOME - COGNOME
const express = require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indirizzo = "127.0.0.1";
const porta = 4000;

app.listen(porta, indirizzo, () => {
    console.log("Sono in ascolto")
})

let elenco = [
    {
        nome: "Giovanni",
        cognome: "Pace",
        eta: 38,
        cod_fis: "PCAGNN"
    },
    {
        nome: "Valeria",
        cognome: "Verdi",
        eta: 25,
        cod_fis: "VLRVRD"
    },
];

// GET - http://localhost:4000/persone
app.get("/persone", (req, res) => {
    res.json(elenco)
})

// GET - http://localhost:4000/persone/PCAGNN
app.get("/persone/:codFis", (req, res) => {
    let codice_fiscale = req.params.codFis;

    for(let [indice, oggetto] of elenco.entries()){
        if(oggetto.cod_fis == codice_fiscale){
            res.json(oggetto)
            return
        }
    }

    res.status(404).json();
})