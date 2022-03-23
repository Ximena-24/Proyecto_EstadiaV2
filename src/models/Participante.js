const {Schema, model} = require('mongoose');

const ParticipanteSchema = new Schema({
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
    fecha: {
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

module.exports = model('Participante', ParticipanteSchema);