const {Schema, model} = require('mongoose');

const CursoSchema = new Schema({
    nombre: {
        type: String,
        required:true
    },
    horas: {
        type: String,
        required:true
    },
    fecha_inicio: {
        type: String,
        required: true
    },
    fecha_termino: {
        type: String,
        required: true
    },
    nivel_escolaridad: {
        type: String,
        required:true
    },
    area_conocimineto: {
        type: String,
        required:true
    },
    institucion: {
        type: String,
        required:true
    },
    año: {
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

module.exports = model('Curso', CursoSchema);