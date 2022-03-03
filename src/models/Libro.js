const {Schema, model} = require('mongoose');

const LibroSchema = new Schema({
    isbn: {
        type: String,
        required:true
    },
    titulo: {
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
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Libro', LibroSchema);