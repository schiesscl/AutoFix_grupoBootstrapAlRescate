let cita = {
    nombre:"",
    tipoReparacion:"",
    descripcion:"",
    fecha:"",
};

let lsitaCitas = [];

function crarCita(nombre, repacion, descripcion, fecha) {
    cita = {};
    cita.nombre = nombre;
    cita.tipoReparacion = reparacion;
    cita.descripcion = descripcion;
    cita.fecha = fecha;
    lsitaCitas.push(cita);
};

