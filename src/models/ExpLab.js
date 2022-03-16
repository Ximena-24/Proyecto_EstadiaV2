const {Schema, model} = require('mongoose');

const ExpLabSchema = new Schema({
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
    puesto: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('ExpLab', ExpLabSchema);