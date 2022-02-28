const {Schema, model} = require('mongoose');

const Reporte_TecnicoSchema = new Schema({
    titulo: {
        type: String,
        required:true
    },
    empresa: {
        type: String,
        required:true
    },
    fecha_entrega: {
        type: String,
        required:true
    },
    descripcion: {
        type: String,
        required:true
    },
    objetivos: {
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

module.exports = model('Reporte_Tecnico', Reporte_TecnicoSchema);