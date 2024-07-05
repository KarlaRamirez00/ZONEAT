document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simular el envío de datos a un servidor ficticio
    const formData = new FormData(this);
    const cardNumber = formData.get('card-number');
    const cardExpiry = formData.get('card-expiry');
    const cardCvv = formData.get('card-cvv');

    // Aquí podrías simular el envío a Transbank (en un escenario real)
    // En este ejemplo, solo mostramos un mensaje ficticio de confirmación
    const paymentResponse = `Pago realizado con éxito con los siguientes datos:
        Número de Tarjeta: ${cardNumber}
        Fecha de Expiración: ${cardExpiry}
        ¡Bienvenido! Ya eres parte de la familia ZONEAT.`;

    document.getElementById('payment-response').innerText = paymentResponse;
});
