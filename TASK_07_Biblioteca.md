# API REST – Gestione Biblioteca Scolastica

**Tecnologia:** Node.js con Express.js  
**Obiettivo:** Creare un’API REST per gestire libri, prestiti e disponibilità all’interno di una biblioteca scolastica.

---

## Struttura della risorsa "Libro"

Ogni libro è rappresentato da:

- `isbn` (string): identificativo univoco (es. "978-88-06-18376-8")
- `titolo` (string)
- `autore` (string)
- `annoPubblicazione` (number)
- `genere` (string)
- `copieTotali` (number)
- `copieDisponibili` (number)

---

## Struttura della risorsa "Prestito"

Ogni prestito è rappresentato da:

- `id` (string): identificativo univoco (es. "PRS-0001")
- `isbn` (string): codice del libro prestato
- `nomeStudente` (string)
- `classe` (string, es. "3A")
- `dataPrestito` (string, formato YYYY-MM-DD)
- `dataRientro` (string, opzionale)

---

## Endpoints – Gestione Libri

### GET /libri
Restituisce tutti i libri nel catalogo.

### GET /libri/:isbn
Restituisce i dettagli di un singolo libro.

### POST /libri
Aggiunge un nuovo libro.  
**Body JSON richiesto:**
```json
{
  "isbn": "978-88-06-18376-8",
  "titolo": "I Promessi Sposi",
  "autore": "Alessandro Manzoni",
  "annoPubblicazione": 1842,
  "genere": "Romanzo Storico",
  "copieTotali": 10,
  "copieDisponibili": 10
}
```

### PUT /libri/:isbn
Aggiorna tutti i dati di un libro.

### PATCH /libri/:isbn
Aggiorna solo alcuni campi del libro.

### DELETE /libri/:isbn
Rimuove un libro dal catalogo.

---

## Endpoints – Gestione Prestiti

### POST /prestiti
Registra un prestito.  
**Body JSON richiesto:**

```json
{
  "id": "PRS-0001",
  "isbn": "978-88-06-18376-8",
  "nomeStudente": "Giulia Verdi",
  "classe": "2B",
  "dataPrestito": "2025-06-20"
}
```

### PATCH /prestiti/:id/restituzione
Segna la restituzione del libro (aggiorna `dataRientro` e incrementa `copieDisponibili`).

### GET /prestiti
Restituisce tutti i prestiti (attivi e storici).

### GET /prestiti/studenti/:classe
Filtra i prestiti per classe.

---

## Endpoints – Statistiche

### GET /statistiche/libri-piu-prestati
Classifica dei libri con più prestiti.

### GET /statistiche/prestiti-attivi
Numero totale di prestiti attivi.

### GET /statistiche/ritardi
Elenco dei prestiti non ancora rientrati dopo oltre 30 giorni.

---

## Considerazioni tecniche

- I dati sono salvati in memoria (`libri[]` e `prestiti[]`).
- Validazione del formato ISBN e delle date.
- La disponibilità dei libri viene aggiornata dinamicamente..



***



# DOMANDA 1:

Cos’è una chiave primaria in un database relazionale? E una chiave esterna? Fai un esempio.

# DOMANDA 2:

1. Cosa si intende per scalabilità orizzontale e verticale in un’applicazione server-side?
