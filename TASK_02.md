## API REST – Gestione Videoteca

**Tecnologia:** Node.js con Express.js

### Obiettivo

Sviluppare un’API REST per gestire una videoteca, con funzionalità di consultazione, inserimento, modifica e cancellazione dei film. I dati sono salvati in memoria tramite un array denominato `videoteca`.

------

### Struttura di un film

Ogni film è rappresentato da un oggetto con le seguenti proprietà:

- `titolo` (string)
- `genere` (string)
- `regista` (string)
- `annoUscita` (number)
- `codice` (string) – identificativo univoco

------

### Endpoints disponibili

#### GET /film

**Descrizione:** Restituisce l’elenco completo dei film presenti nella videoteca.

------

#### GET /film/genere/:genere

**Descrizione:** Restituisce l’elenco dei film che appartengono a un determinato genere (es. `azione`, `drammatico`, `commedia`).

------

#### GET /film/codice/:codiceFilm

**Descrizione:** Restituisce i dettagli del film identificato dal codice univoco.
 **Risposte:**

- `200 OK` se trovato
- `404 Not Found` se il codice non corrisponde ad alcun film

------

#### POST /film/nuovo

**Descrizione:** Inserisce un nuovo film nella videoteca.
**Body richiesto (JSON):**

```json
{
  "titolo": "Inception",
  "genere": "fantascienza",
  "regista": "Christopher Nolan",
  "annoUscita": 2010,
  "codice": "MOV-001"
}
```

**Risposta:**

- `201 Created` in caso di successo

------

#### PUT /film/aggiorna/:codiceFilm

**Descrizione:** Modifica le informazioni di un film esistente in base al codice.
 **Note:** I campi non specificati nel body non vengono modificati.
 **Esempio body (JSON):**

```json
{
  "annoUscita": 2012
}
```

------

#### DELETE /film/elimina/:codiceFilm

**Descrizione:** Rimuove un film in base al codice.
 **Risposte:**

- `200 OK` se eliminato
- `404 Not Found` se non esiste

------

### Considerazioni tecniche

- I dati non sono persistenti, ma gestiti in memoria.
- Il `codice` è pensato come chiave primaria simbolica (es. `MOV-003`).
- L’API usa `express.json()` e `express.urlencoded()` per il parsing delle richieste.

------

### Suggerimenti per test

- Puoi usare **Postman** o **curl** per provare i vari endpoint.
- Attiva il server e invia richieste HTTP ai percorsi sopra descritti per simulare operazioni CRUD.