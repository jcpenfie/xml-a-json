// eslint-disable-next-line import/no-unresolved -- Browser ESM CDN import.
import { convert } from 'https://esm.sh/xmlbuilder2';

const formulario = document.getElementById('formulario');
const result = document.getElementById('results');

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const archivoSeleccionado = formulario.querySelector('input[type="file"]').files[0];
  if (!archivoSeleccionado) {
    result.innerText = 'Selecciona un archivo XML.';
    return;
  }

  const contenidoArchivo = await archivoSeleccionado.text();
  const obj = convert(contenidoArchivo, { format: 'object' });
  result.innerText = "¡Convertido! Lo tienes en el portapeles"
  navigator.clipboard.writeText(JSON.stringify(obj, null, 4));
});
