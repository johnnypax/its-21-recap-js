## API REST – Gestione Pazienti

**Tecnologia:** Node.js con Express.js
 **Obiettivo:** Creare un’API REST per gestire i dati anagrafici dei pazienti.

------

### Struttura della risorsa "Paziente"

Ogni paziente è rappresentato da un oggetto con queste proprietà:

- `id` (string): identificativo univoco (es. "PAT-001")
- `nome` (string)
- `cognome` (string)
- `codiceFiscale` (string)
- `dataNascita` (string, formato YYYY-MM-DD)
- `telefono` (string, opzionale)
- `email` (string, opzionale)

------

### Endpoints disponibili

#### `GET /pazienti`

Restituisce l'elenco completo dei pazienti registrati.

#### `GET /pazienti/:id`

Restituisce i dettagli di un paziente specifico.

#### `POST /pazienti`

Inserisce un nuovo paziente nel sistema.
 **Body JSON richiesto:**

```json
{
  "id": "PAT-002",
  "nome": "Maria",
  "cognome": "Bianchi",
  "codiceFiscale": "BNCMRA90A01H501Z",
  "eta": 38,
  "telefono": "3456789012",
  "email": "maria.bianchi@example.com"
}
```

**Risposte:**

- `201 Created` – Paziente aggiunto correttamente
- `400 Bad Request` – Dati mancanti o malformati

#### `PUT /pazienti/:id`

Aggiorna i dati completi di un paziente. Tutti i campi devono essere presenti nel body.

#### `PATCH /pazienti/:id`

Aggiorna solo alcuni campi del paziente (es. solo telefono o email).

#### `DELETE /pazienti/:id`

Rimuove il paziente dal sistema.

------

### Considerazioni tecniche

- I dati sono mantenuti in un array `pazienti` in memoria.
- Gli ID devono essere univoci (es. "PAT-001", "PAT-002").
- Il `codiceFiscale` deve essere validato per lunghezza e formato.
- L’API usa `express.json()` per il parsing del body delle richieste.

***

### Endpoints per le statistiche sui pazienti

#### `GET /pazienti/statistiche/generali`

**Descrizione:**
 Restituisce statistiche aggregate sulla popolazione dei pazienti.

**Risposta di esempio:**

```json
{
  "numeroTotale": 120,
  "etaMedia": 45.6,
  "piuGiovane": 18,
  "piuAnziano": 91
}
```

------

#### `GET /pazienti/statistiche/fasce-eta`

**Descrizione:**
 Restituisce il numero di pazienti suddivisi per fasce di età.

**Risposta di esempio:**

```json
{
  "0-17": 5,
  "18-35": 32,
  "36-60": 55,
  "61+": 28
}
```

------

#### `GET /pazienti/statistiche/nati-per-anno`

**Descrizione:**
 Restituisce un conteggio dei pazienti per anno di nascita.

**Risposta di esempio:**

```json
{
  "1980": 12,
  "1990": 25,
  "2000": 18
}
```