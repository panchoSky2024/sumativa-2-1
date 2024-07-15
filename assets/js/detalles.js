import { getZapatillaById } from './operaciones.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const zapatillaId = urlParams.get('id');
    const zapatilla = getZapatillaById(zapatillaId);

    if (zapatilla) {
        const zapatillaDetails = document.getElementById('zapatillaDetails');
        const zapatillaHTML = `
            <div>
                <h2>${zapatilla.name}</h2>
                <img src="${zapatilla.image}" alt="${zapatilla.name}">
                <p>ID: ${zapatilla.id}</p>
                <!-- Agregar más detalles aquí según sea necesario -->
            </div>
        `;
        zapatillaDetails.innerHTML = zapatillaHTML;
    } else {
        console.error(`No se encontró la zapatilla con ID ${zapatillaId}`);
    }
});