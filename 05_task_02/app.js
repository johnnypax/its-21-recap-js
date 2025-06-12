const express = require("express")          //Importo il modulo Express

const app = express()                       //Inizializzo l'istanza Express
app.use(express.json())                     //Configuro Express come REST API
app.use(express.urlencoded({extended: false}))   //Imposto il Body Parser per lavorare con REST

const indirizzo = "127.0.0.1"
const porta = 4000

app.listen(porta, indirizzo, () => {
    console.log("Sono in ascolto");    
})

//Mock
let elenco = [
    {
        "titolo": "Titolo 1",
        "genere": "Fantasy",
        "regista": "Regista 1",
        "annoUscita": 2005,
        "codice": "FLM001"
    },
    {
        "titolo": "Titolo 2",
        "genere": "Fantasy",
        "regista": "Regista 2",
        "annoUscita": 2005,
        "codice": "FLM002"
    },
    {
        "titolo": "Titolo 3",
        "genere": "Thriller",
        "regista": "Regista 3",
        "annoUscita": 2002,
        "codice": "FLM003"
    }
]

app.get("/film", (req, res)=> {
    res.json(elenco)
});

// app.get("/film/genere/:genere", (req, res) => {
//     let genere_ricerca = req.params.genere
//     let risultato = elenco.filter(f => f.genere == genere_ricerca)

//     res.json(risultato)
// })

app.get("/film/genere/:genere", (req, res) => {
    let genere_ricerca = req.params.genere

    let risultato = []
    for(let [indice, film] of elenco.entries()){
        if(film.genere == genere_ricerca){
            risultato.push(film)
        }
    }

    res.json(risultato)
})

app.get("/film/codice/:codiceFilm", (req, res) => {
    let codice_ricerca = req.params.codiceFilm
    let risultato = elenco.find(f => f.codice == codice_ricerca)
    res.end(risultato)
})

app.post("/film/nuovo", (req, res) => {
    if(!req.body.titolo || req.body.titolo.trim() == ""){
        res.status(400).json()
        return
    }

    let nuovo = {
        titolo: req.body.titolo,
        genere: req.body.genere,
        regista: req.body.regista,
        annoUscita: req.body.annoUscita,
        codice: req.body.codice
    }    

    elenco.push(nuovo)

    res.status(201).json()
})

app.put("/film/aggiorna/:codiceFilm", (req, res) => {
    let codice_ricerca = req.params.codiceFilm

    for(let [indice, film] of elenco.entries()){
        if(film.codice == codice_ricerca){
            film.titolo = req.body.titolo ? req.body.titolo : film.titolo;
            film.genere = req.body.genere ? req.body.genere : film.genere;
            film.regista = req.body.regista ? req.body.regista : film.regista;
            film.annoUscita = req.body.annoUscita ? req.body.annoUscita : film.annoUscita;

            res.status(200).json()
        }
    }

    res.status(400).json()
})

app.delete("/film/aggiorna/:codiceFilm", (req, res) => {
    let codice_ricerca = req.params.codiceFilm

    for(let [indice, film] of elenco.entries()){
        if(film.codice == codice_ricerca){
            elenco.splice(indice, 1)
            res.status(200).json()
        }
    }

    res.status(404).json()
})