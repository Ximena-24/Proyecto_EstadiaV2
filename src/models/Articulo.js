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
    nom_articulo: {
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
    }
}, {
    timestamps: true
})

module.exports = model('Articulo', ArticuloSchema);