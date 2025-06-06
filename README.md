# CASCOS Finder PWA

Una Progressive Web App (PWA) pensata per officine, carrozzieri e installatori professionisti che necessitano di:
- Ricercare rapidamente il sollevatore più adatto in base al **modello del veicolo**
- Filtrare i sollevatori disponibili per **portata** e **larghezza**
- Accedere a **dati tecnici dettagliati** e codici prodotto
- Scaricare documenti PDF associati ai modelli

## 📦 Contenuto
- `index.html`: Interfaccia principale della PWA
- `app.js`: Logica per filtrare e visualizzare i dati
- `sollevatori.csv`: Dati tecnici dei modelli CASCOS
- `compatibilita_cascos.csv`: Associazione veicoli/sollevatori
- `icon/`: Icone PWA (192x192 e 512x512)
- `manifest.json` + `service-worker.js`: PWA ready

## 🚀 Deploy rapido
1. Carica i file su una repository pubblica GitHub (es. `cascos_app`)
2. Vai su `Settings > Pages`
3. Imposta:
   - Source: `Deploy from a branch`
   - Branch: `main` (root)
4. Visita la tua PWA all’indirizzo:
   `https://<tuo-username>.github.io/cascos_app/`

## 🛠️ Requisiti
- Browser moderno (Chrome, Edge, Safari)
- Supporta modalità offline e installazione come App nativa

## 📧 Contatti
Creato da Alessandro Pezzali — [pezzaliAPP.com](https://www.pezzaliapp.com)

---

⚠️ Tutti i dati tecnici sono indicativi e soggetti a verifica presso il produttore.
