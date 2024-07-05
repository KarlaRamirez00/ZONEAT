const cart = [];

function addToCart(productName, variantName) {
    const variant = document.querySelector(`input[name="${variantName}"]:checked`).value;
    const item = {
        productName: productName,
        variant: variant
    };
    cart.push(item);
    displayCartItems();
    calculateTotal();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpiar contenido anterior

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `${item.productName} - ${item.variant} <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItemsContainer.appendChild(cartItem);
    });
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        // Asume precios fijos por variante, puedes ajustarlo según sea necesario
        if (item.variant === 'semanal') total += 1000;
        if (item.variant === 'mensual') total += 2000;
        if (item.variant === 'anual') total += 3000;
    });
    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCartItems();
    calculateTotal();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Buena elección! Ve a pagar y estaras listo!');
    // Aquí puedes agregar la lógica para procesar el pago
});
