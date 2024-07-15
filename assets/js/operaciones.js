import { zapatillas as zapatillasNike } from './zapatillas.js'; 
import { zapatillas as zapatillasAdidas } from './zapatillas2.js'; 

const allZapatillas = [...zapatillasNike, ...zapatillasAdidas];

export const getZapatillaById = (id) => {
    return allZapatillas.find(zapatilla => zapatilla.id === id);
};

export const renderCards = (data, containerId) => {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        container.innerHTML += createCard(item);
    });
};

function createCard(zapatilla) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${zapatilla.image}" class="card-img-top" alt="${zapatilla.name}">
                <div class="card-body">
                    <h5 class="card-title">${zapatilla.name}</h5>
                    <p class="card-text">$${zapatilla.price}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${zapatilla.id}">Añadir al carrito</button>
                </div>
            </div>
        </div>
    `;
}

export function addToCart(zapatillaId) {
    const selectedZapatilla = getZapatillaById(zapatillaId);
    if (selectedZapatilla) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(selectedZapatilla);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Añadido al carrito: ${selectedZapatilla.name}`);
    } else {
        console.error(`No se encontró la zapatilla con ID ${zapatillaId}`);
    }
}
