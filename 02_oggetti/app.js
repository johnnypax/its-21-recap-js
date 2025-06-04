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

app.get("/persona", (req, res) => {
    let persona = {
        nome: "Giovanni",
        cognome: "Pace",
        eta: 38
    }

    res.json(persona)
})

app.post("/echo", (req, res) => {
    let persona = {
        nominativo: req.body.nome + " " + req.body.cognome,
        eta: req.body.eta
    }
    res.json(persona)
})