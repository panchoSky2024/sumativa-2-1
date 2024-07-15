document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cartContainer');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((zapatilla, index) => {
        const zapatillaElement = document.createElement('div');
        zapatillaElement.className = 'col mb-4';
        zapatillaElement.innerHTML = `
            <div class="card h-100">
                <img src="${zapatilla.image}" class="card-img-top" alt="${zapatilla.name}">
                <div class="card-body">
                    <h5 class="card-title">${zapatilla.name}</h5>
                    <p class="card-text">$${zapatilla.price}</p>
                    <!-- Agregar más información de la zapatilla si es necesario -->
                    <button class="btn btn-danger" onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(zapatillaElement);
    });
});
