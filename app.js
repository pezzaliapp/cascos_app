// Caricamento dati dal JSON
let sollevatori = [];

fetch("sollevatori_data.json")
  .then((res) => res.json())
  .then((data) => {
    sollevatori = data;
    renderForm();
  });

function renderForm() {
  const container = document.body;
  container.innerHTML = `
    <h1>Consulta Scheda Tecnica Sollevatore</h1>
    <label>Tipo di veicolo:</label>
    <select id="tipoVeicolo">
      <option value="">Seleziona...</option>
      <option value="Utilitarie">Utilitarie</option>
      <option value="City car">City car</option>
      <option value="SUV">SUV</option>
      <option value="SUV XL">SUV XL</option>
      <option value="Furgoni medi">Furgoni medi</option>
      <option value="Furgoni lunghi">Furgoni lunghi</option>
      <option value="4x4">4x4</option>
    </select>
    <div id="risultato"></div>
  `;

  document.getElementById("tipoVeicolo").addEventListener("change", function () {
    const tipo = this.value;
    const risultato = document.getElementById("risultato");
    risultato.innerHTML = "";
    if (!tipo) return;

    const compatibili = sollevatori.filter(s => s.tipologie_veicolo.includes(tipo));
    if (compatibili.length === 0) {
      risultato.innerHTML = `<p>Nessun sollevatore trovato per ${tipo}.</p>`;
      return;
    }

    const suggerito = compatibili[0];
    risultato.innerHTML = `
      <h2>Modello consigliato: ${suggerito.modello}</h2>
      <ul>
        <li><strong>Codice:</strong> ${suggerito.codice}</li>
        <li><strong>Portata:</strong> ${suggerito.portata_t} ton.</li>
        <li><strong>Larghezza ponte:</strong> ${suggerito.larghezza_mm} mm</li>
        <li><strong>Corsa utile:</strong> ${suggerito.corsa_min_mm}–${suggerito.corsa_max_mm} mm</li>
        <li><strong>Tipo base:</strong> ${suggerito.tipo_base}</li>
        <li><strong>Bracci:</strong> ${suggerito.bracci}</li>
        <li><strong>PDF scheda:</strong> <a href="${suggerito.pdf}" target="_blank">Download</a></li>
        <li><strong>Veicoli idonei:</strong> ${suggerito.veicoli_idonei.join(", ")}</li>
      </ul>
    `;
  });
}
