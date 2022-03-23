const {Schema, model} = require('mongoose');

const CapacitacionSchema = new Schema({
    Tipo: {
        type: String,
        required:true
    },
    Nombre: {
        type: String,
        required:true
    },
    institucion: {
        type: String,
        required: true
    },
    fecha_inicio: {
        type: String,
        required: true
    },
    fecha_termino: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

module.exports = model('Capacitacion', CapacitacionSchema);