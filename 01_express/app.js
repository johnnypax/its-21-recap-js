const express = require('express')
const app = express();

const indirizzo = "127.0.0.1"
const porta = 4000

app.listen(porta, indirizzo, () => {
    console.log("Sono in ascolto")
})

app.get("/", (req, res) => {
    res.send("CIAO sono la Home in modalità GET")
})

app.post("/", (req, res) => {
    res.send("CIAO sono la Home in modalità POST")
})

app.get("/secondario", (req, res) => {
    res.send("CIAO sono il secondario in modalità GET")
})

app.get("/parametri/:varNome", (req, res) => {
    let nome = req.params.varNome;

    res.send("Ciao: " + nome);
})

app.get("/saluta",  (req, res) => {
    res.send("Sono il saluta GET")
})

app.get("/saluta/:varNome/:varCognome", (req, res) => {
    let nome = req.params.varNome;
    let cognome = req.params.varCognome

    res.send("PRIMO Ciao " + nome + " " + cognome)
})

app.get("/saluta/:varCognome/:varNome", (req, res) => {
    let nome = req.params.varNome;
    let cognome = req.params.varCognome

    res.send("SECONDO Ciao " + nome + " " + cognome)
})