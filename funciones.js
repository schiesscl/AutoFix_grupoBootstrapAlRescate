let cita = {
    nombre:"",
    tipoReparacion:"",
    descripcion:"",
    fecha:"",
};

let lsitaCitas = [];

function crarCita(nombre, reparacion, descripcion, fecha) {
    cita = {};
    cita.nombre = nombre;
    cita.tipoReparacion = reparacion;
    cita.descripcion = descripcion;
    cita.fecha = fecha;
    lsitaCitas.push(cita);
};

$(document).ready(function() {
    $('#confirmar').click(function() {
        validarCampos();
        if (checkeo === 0) {
            let nombre = $('#nombreCliente').val();
            let reparacion = $('#tipoReparacion').val();
            let descripcion = $('#descripcion').val();
            let fecha = $('#fechaCita').val();
            crarCita(nombre, reparacion, descripcion, fecha);
            alert('Cita creada exitosamente');
            limpiarCampos();
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    });
});



function validarCampos() {
    checkeo = 0;
    $('#main').each(function() {
        let inputs = $(this).find('textarea, input');
        let sh = $(this).find('select');
        inputs.each(function() {
            if ($(this).val() == "") {
                $(this).css('border-color', 'red');
                checkeo++;
            }else {
                    $(this).css('border-color', '');
                }
            }); 
        sh.each(function() {
            if ($(this).val() == "0") {
            $(this).css('border-color', 'red');
            checkeo++;
            } else {
            $(this).css('border-color', '');
            }
        });
    });
}

function limpiarCampos() {
    $('#main input').val('');
    $('#fechaCita').val('');
    $('#descripcion').val('');
    $('#tipoReparacion').val('0'); 
    $('#CCV').val('');
    $('#main input, #main select #main textarea').css('border-color', '');
}
// Limitar número de tarjeta a solo números y máximo 8 dígitos
document.addEventListener('DOMContentLoaded', function() {
    const nTarjeta = document.getElementById('nTarjeta');
    const cvv = document.getElementById('CVV');

    if (nTarjeta) {
        nTarjeta.setAttribute('maxlength', '16');
        nTarjeta.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 16);
        });
    }

    if (cvv) {
        cvv.setAttribute('maxlength', '3');
        cvv.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 3);
        });
    }
});