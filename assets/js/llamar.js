import { getZapatillaById, addToCart, renderCards } from './operaciones.js';
import { zapatillas as zapatillasNike } from './zapatillas.js'; 
import { zapatillas as zapatillasAdidas } from './zapatillas2.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const zapasRow = document.getElementById('zapasrow');
    const allZapatillas = [...zapatillasNike, ...zapatillasAdidas];

    renderCards(allZapatillas, 'zapasrow');

    // Manejador de eventos para el botón "Añadir al carrito"
    zapasRow.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const zapatillaId = event.target.dataset.id;
            addToCart(zapatillaId);
        }
    });
});
