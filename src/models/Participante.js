const {Schema, model} = require('mongoose');

const ParticipanteSchema = new Schema({
    Tipo: {
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
    fecha: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

module.exports = model('Participante', ParticipanteSchema);