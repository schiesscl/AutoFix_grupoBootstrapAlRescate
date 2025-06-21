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
