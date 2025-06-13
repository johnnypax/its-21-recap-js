# Gestione di un sistema di prenotazioni alberghiere

Creare un'API per la gestione delle prenotazioni alberghiere. L'API deve gestire le
camere. Ogni camera deve avere un numero, un tipo (singola, doppia, suite) e
una disponibilità.

**Endpoint richiesti:**

1. **GET** /rooms: Recupera l'elenco di tutte le camere.
2. **GET** /rooms/
   : Recupera una singola camera per ID.
3. **POST** /rooms: Aggiunge una nuova camera. Richiede un corpo con number , type , e
   availability .
4. **PUT** /rooms/
   : Aggiorna i dettagli di una camera esistente per ID.
5. **DELETE** /rooms/
   : Elimina una camera per ID.
6. **PUT** /rooms/availability/... : Singolo endpoint per cambio di stato della camera occupato/non occupato.
7. **GET** /rooms/available: Recupera l'elenco di tutte le camere libere.
8. **GET** /rooms/not-available: Recupera l'elenco di tutte le camere occupate.

### DOMANDA 1:

Descrivi la tipologia di comunicazione prevista nel punto precedente, quali sono le caratteristiche e gli elementi distintivi.

### DOMANDA 2:

Che tipologia di architettura può descrivere il progetto in esame?