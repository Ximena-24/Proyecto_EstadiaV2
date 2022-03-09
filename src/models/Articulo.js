const {Schema, model} = require('mongoose');

const ArticuloSchema = new Schema({
    issn: {
        type: String,
        required:true
    },
    doi: {
        type: String,
        required:true
    },
    titulo: {
        type: String,
        required: true
    },
    nom_revista: {
        type: String,
        required: true
    },
    titulo_revista: {
        type: String,
        required:true
    },
    fecha_publicacion: {
        type: String,
        required:true
    },
    area: {
        type: String,
        required:true
    },
    rol: {
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

module.exports = model('Articulo', ArticuloSchema);