const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const porta = 4000;
const indirizzo = "127.0.0.1"

app.listen(porta, indirizzo, () => {
    console.log("Server in ascolto")
})

let elenco = [
    {
        "isbn": "978-88-06-18376-8",
        "titolo": "I Promessi Sposi",
        "autore": "Alessandro Manzoni",
        "annoPubblicazione": 1842,
        "genere": "Romanzo Storico",
        "copieTotali": 10,
        "copieDisponibili": 10
    },
    {
        "isbn": "978-88-17-02636-2",
        "titolo": "Il Nome della Rosa",
        "autore": "Umberto Eco",
        "annoPubblicazione": 1980,
        "genere": "Romanzo Storico/Giallo",
        "copieTotali": 8,
        "copieDisponibili": 8
    },
    {
        "isbn": "978-88-04-63309-1",
        "titolo": "Se questo è un uomo",
        "autore": "Primo Levi",
        "annoPubblicazione": 1947,
        "genere": "Memorie/Testimonianza",
        "copieTotali": 12,
        "copieDisponibili": 12
    },
    {
        "isbn": "978-88-07-88698-3",
        "titolo": "Cent'anni di solitudine",
        "autore": "Gabriel García Márquez",
        "annoPubblicazione": 1967,
        "genere": "Realismo Magico",
        "copieTotali": 7,
        "copieDisponibili": 7
    }
]

app.get("/libri", (req, res) => {
    res.json(elenco)
})


app.get("/libri/:isbn", (req, res) => {
    let codice = req.params.isbn

    for(let [indice, libro] of elenco.entries()){
        if(libro.isbn == codice){
            res.json(libro)
            return
        }
    }

    res.status(404).json()
})

app.post("/libri", (req, res) => {
    if( !req.body.isbn || req.body.isbn.trim() == "" || 
        !req.body.titolo || req.body.titolo.trim() == "" ){
            res.status(400).json()
            return;
        }

    let nuovo = {
        isbn: req.body.isbn,
        titolo: req.body.titolo,
        autore: req.body.autore,
        annoPubblicazione: req.body.annoPubblicazione,
        genere: req.body.genere,
        copieTotali: req.body.copieTotali,
        copieDisponibili: req.body.copieDisponibili,
    }

    elenco.push(nuovo)

    res.status(201).json()
})

app.delete("/libri/:isbn", (req, res) => {
    let codice = req.params.isbn

    for(let [indice, libro] of elenco.entries()){
        if(libro.isbn == codice){
            elenco.splice(indice, 1)
            res.status(200).json()
            return
        }
    }

    res.status(404).json()
})

app.put("/libri/:isbn", (req, res) => {
    let codice = req.params.isbn

    for(let [indice, libro] of elenco.entries()){
        if(libro.isbn == codice){
            libro.titolo =  req.body.titolo
            libro.autore =  req.body.autore
            libro.annoPubblicazione =  req.body.annoPubblicazione
            libro.genere =  req.body.genere
            libro.copieTotali =  req.body.copieTotali
            libro.copieDisponibili =  req.body.copieDisponibili
            res.status(200).json()
            return
        }
    }

    res.status(404).json()
})


app.patch("/libri/:isbn", (req, res) => {
    let codice = req.params.isbn

    for(let [indice, libro] of elenco.entries()){
        if(libro.isbn == codice){
            libro.titolo =  req.body.titolo ? req.body.titolo : libro.titolo
            libro.autore =  req.body.autore ? req.body.autore : libro.autore
            libro.annoPubblicazione =  req.body.annoPubblicazione ? req.body.annoPubblicazione : libro.annoPubblicazione
            libro.genere =  req.body.genere ? req.body.genere : libro.genere
            libro.copieTotali =  req.body.copieTotali ? req.body.copieTotali : libro.copieTotali
            libro.copieDisponibili =  req.body.copieDisponibili ? req.body.copieDisponibili : libro.copieDisponibili
            res.status(200).json()
            return
        }
    }

    res.status(404).json()
})