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
        titolo: "Harry Potter",
        descrizione: "Boh",
        isbn: "HPP12345",
        anno: 1978,
        autore: "Rowling"
    },
    {
        titolo: "Il signore degli anelli",
        descrizione: "Boh",
        isbn: "SGNANL",
        anno: 1937,
        autore: "JRRT"
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