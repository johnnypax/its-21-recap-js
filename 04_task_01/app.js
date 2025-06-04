const express = require("express")
const app = express()

const indirizzo = "127.0.0.1"
const porta = 4000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(porta, indirizzo, () => {
    console.log(`Sono in ascolto su http://${indirizzo}:${porta}`)
})

let biblioteca = [
  {
    "titolo": "Harry Potter e la Pietra Filosofale",
    "descrizione": "Il primo libro della saga che introduce il giovane orfano Harry Potter al mondo della magia.",
    "isbn": "978-88-6918-124-0",
    "anno": 1997,
    "autore": "J.K. Rowling"
  },
  {
    "titolo": "Il Signore degli Anelli: La Compagnia dell'Anello",
    "descrizione": "Il primo volume dell'epica trilogia fantasy di Tolkien, che narra le avventure di Frodo Baggins per distruggere l'Anello del Potere.",
    "isbn": "978-88-452-9261-3",
    "anno": 1954,
    "autore": "J.R.R. Tolkien"
  },
  {
    "titolo": "1984",
    "descrizione": "Un romanzo distopico che esplora i pericoli del totalitarismo e della sorveglianza governativa.",
    "isbn": "978-88-04-68875-9",
    "anno": 1997,
    "autore": "George Orwell"
  },
  {
    "titolo": "Orgoglio e Pregiudizio",
    "descrizione": "Un classico della letteratura inglese che esplora le dinamiche sociali e le relazioni amorose nell'Inghilterra del XIX secolo.",
    "isbn": "978-88-04-58962-9",
    "anno": 1813,
    "autore": "Jane Austen"
  },
  {
    "titolo": "Cronache di Zylos: L'Ascesa dell'Ombra",
    "descrizione": "In un mondo sull'orlo della guerra, un giovane eroe scopre un'antica profezia che lo lega al destino di Zylos.",
    "isbn": "978-88-9999-001-5",
    "anno": 2023,
    "autore": "Elara Vance"
  }
]

//Punto 1
app.get("/libri", (req, res) => {
    res.json(biblioteca)
})

app.get("/libri/:isbn", (req, res) => {
    let codice_isbn = req.params.isbn

    let libro = biblioteca.find(l => l.isbn == codice_isbn)
    
    if(libro)
        res.json(libro)
    else
        res.status(404).json()
})

// app.get("/libri/:isbn", (req, res) => {
//     var codice_isbn = req.params.isbn;

//     for(let [indice, oggetto] of biblioteca.entries()){
//         if(oggetto.isbn == codice_isbn){
//             res.json(oggetto)
//             return
//         }
//     }

//     res.status(404).json()
// })

app.get("/libri/anno/:annoRicerca", (req, res) => {
    let anno_ric = req.params.annoRicerca
    let risultato = [];

    for(let [indice, libro] of biblioteca.entries())
        if(libro.anno == anno_ric)
            risultato.push(libro)

    res.json(risultato)
})