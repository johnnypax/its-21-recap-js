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
        eta: 38
    },
    {
        nome: "Valeria",
        cognome: "Verdi",
        eta: 25
    },
];

app.get("/persone", (req, res) => {
    res.json(elenco)
})