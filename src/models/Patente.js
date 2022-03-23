const {Schema, model} = require('mongoose');

const PatenteSchema = new Schema({
    nombreS: {
        type: String,
        required:true
    },
    nitS: {
        type: String,
        required:true
    },
    nacionalidadS: {
        type: String,
        required: true
    },
    paisS: {
        type: String,
        required: true
    },
    edadS: {
        type: String,
        required:true
    },
    nombreP: {
        type: String,
        required:true
    },
    nitP: {
        type: String,
        required:true
    },
    nacionalidadP: {
        type: String,
        required: true
    },
    paisP: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required:true
    },
    nitI: {
        type: String,
        required:true
    },
    nacionalidadI: {
        type: String,
        required: true
    },
    paisI: {
        type: String,
        required: true
    },
    fecha_publicacion: {
        type: String,
        required:true
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


module.exports = model('Patente', PatenteSchema);