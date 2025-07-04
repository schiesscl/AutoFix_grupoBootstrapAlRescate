// Limitar número de tarjeta a solo números y máximo 8 dígitos
document.addEventListener('DOMContentLoaded', function() {
    const nTarjeta = document.getElementById('nTarjeta');
    const cvv = document.getElementById('CVV');

    if (nTarjeta) {
        nTarjeta.setAttribute('maxlength', '16');
        nTarjeta.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 8);
        });
    }

    if (cvv) {
        cvv.setAttribute('maxlength', '3');
        cvv.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 3);
        });
    }
});