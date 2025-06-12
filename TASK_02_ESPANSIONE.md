## Espansioni funzionali per l'API Videoteca

### 1. **Categorie multiple per film**

- **Modifica la struttura del film** per includere un array di generi:

```
"generi": ["azione", "fantascienza"]
```

- Aggiungi endpoint:

```
GET /film/categoria/:genere
```

Cerca tutti i film che includono *almeno* il genere specificato.

------

### 2. Statistiche aggregate

Aggiungi un endpoint che restituisca dati statistici:

```
GET /film/statistiche
```

**Risultato esempio:**

```
{
  "totaleFilm": 12,
  "mediaAnnoUscita": 2007,
  "filmPerGenere": {
    "azione": 5,
    "drammatico": 3,
    "commedia": 4
  }
}
```

------

### 3. Film più vecchio e più recente

Endpoint:

```
GET /film/piu-vecchio
GET /film/piu-recente
```

Restituiscono rispettivamente il film con l’anno più basso e quello con l’anno più alto.

------

### 4. Ricerca avanzata per parola chiave

Endpoint:

```
GET /film/cerca/:parola
```

Cerca la parola chiave nel titolo, regista o genere (case-insensitive, con `.includes()`).

------

### 5. Validazione avanzata dei dati

- Impedisci l’inserimento di film con:
  - `codice` duplicato
  - anno di uscita non compreso tra 1900 e l’anno attuale
- Restituisci `400 Bad Request` con messaggio di errore dettagliato.