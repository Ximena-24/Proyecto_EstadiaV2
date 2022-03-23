const {Schema, model} = require('mongoose');

const CapacitacionSchema = new Schema({
    tipo: {
        type: String,
        required:true
    },
    nombre: {
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
    categoria: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    filename: {
        type: String
    },
    path: {
        type: String
    },
    originalname: {
        type: String
    },
    mimetype: {
        type: String
    },
    size: { 
        type: Number
    },

}, {
    timestamps: true
})

module.exports = model('Capacitacion', CapacitacionSchema);