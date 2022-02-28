const {Schema, model} = require('mongoose');

const CapituloSchema = new Schema({
    isbn: {
        type: String,
        required:true
    },
    titulo_libro: {
        type: String,
        required:true
    },
    pais: {
        type: String,
        required: true
    },
    idioma: {
        type: String,
        required: true
    },
    fecha_publicacion: {
        type: String,
        required:true
    },
    editorial: {
        type: String, 
        required:true
    },
    edicion: {
        type: String,
        required:true
    },
    titulo_capitulo: {
        type: String,
        required:true
    },
    num_capitulo: {
        type: String,
        required:true
    },
    pag_Capitulo: {
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

module.exports = model('Capitulo', CapituloSchema);