const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const indirizzo = "127.0.0.1"
const porta = 4000

app.listen(porta, indirizzo, () => {
    console.log("Sono in ascolto sulla porta 4000");
})

let elenco = [
    {
        "id": "PAT-001",
        "nome": "Giovanni",
        "cognome": "Pace",
        "codiceFiscale": "PCAGNN",
        "eta": 32,
        "telefono": "12345",
        "email": "gio@pace.com"
    },
    {
        "id": "PAT-002",
        "nome": "Valeria",
        "cognome": "Verdi",
        "codiceFiscale": "VLRVRD",
        "eta": 25,
        "telefono": "12346",
        "email": "val@verdi.com"
    },
]

app.get("/pazienti", (req, res) => {
    res.json(elenco)
})

app.get("/pazienti/:id", (req, res) => {
    let id_paziente = req.params.id

    for(let [indice, paziente] of elenco.entries()){
        if(paziente.id == id_paziente){
            res.json(paziente)
            return
        }
    }

    res.status(404).json()
})

app.post("/pazienti", (req, res) => {
    if(
        !req.body.id || req.body.id.trim() == "" ||
        !req.body.nome || req.body.nome.trim() == "" ||
        !req.body.cognome || req.body.cognome.trim() == ""
    ){
        res.status(400).json()
        return
    }

    let nuovo = {
        id: req.body.id,
        nome: req.body.nome,
        cognome: req.body.cognome,
        codiceFiscale: req.body.codiceFiscale,
        dataNascita: req.body.dataNascita,
        telefono: req.body.telefono,
        email: req.body.email,
    }

    elenco.push(nuovo)

    res.status(201).json()
})

app.delete("/pazienti/:id", (req, res) => {
    let id_paziente = req.params.id

    for(let [indice, paziente] of elenco.entries()){
        if(paziente.id == id_paziente){
            elenco.splice(indice, 1)
            res.status(200).json()
            return
        }
    }

    res.status(404).json()
})

app.put("/pazienti/:id", (req, res) => {
    let id_paziente = req.params.id

    for(let [indice, paziente] of elenco.entries()){
        if(paziente.id == id_paziente){
            paziente.nome = req.body.nome ? req.body.nome : paziente.nome
            paziente.cognome = req.body.cognome ? req.body.cognome : paziente.cognome
            paziente.codiceFiscale = req.body.codiceFiscale ? req.body.codiceFiscale : paziente.codiceFiscale
            paziente.eta = req.body.eta ? req.body.eta : paziente.eta
            paziente.telefono = req.body.telefono ? req.body.telefono : paziente.telefono
            paziente.email = req.body.email ? req.body.email : paziente.email

            res.status(200).json()
            return
        }
    }

    res.status(404).json()
})

app.get("/pazienti/statistiche/generali", (req, res) => {

    let sommaEta = 0;
    for(let [indice, paziente] of elenco.entries())
        sommaEta = sommaEta + paziente.eta
    let etaMedia = sommaEta / elenco.length

    let minimo;
    if(elenco.length > 0){
        minimo = elenco[0].eta;
        for(let [indice, paziente] of elenco.entries())
            if(paziente.eta < minimo)
                minimo = paziente.eta
    }

    let massimo;
    if(elenco.length > 0){
        massimo = elenco[0].eta;
        for(let [indice, paziente] of elenco.entries())
            if(paziente.eta > massimo)
                massimo = paziente.eta
    }

    let statistiche = {
        numeroTotale: elenco.length,
        etaMedia: etaMedia,
        piuGiovane: minimo,
        piuAnziano: massimo
    }

    res.json(statistiche)
})