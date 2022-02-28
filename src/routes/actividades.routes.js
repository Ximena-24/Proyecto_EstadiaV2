const { Router } = require('express');
const router = Router();

const {
    agregarTipos,
    articulo,
    createArticulo,
    libro,
    createLibro,
    capituloL,
    createCapLibro,
    reporteTec,
    createreporteTec,
    memorias,
    createMemorias,
    patentes,
    createPatente,
    congreso,
    createCongreso,
    curso,
    createCurso,
    diplomado,
    createDiplomado


} = require('../controllers/actividades.controller');

const {isAuthenticated} = require('../helpers/auth');

router.get('/actividades/agregarTipo', isAuthenticated, agregarTipos); 

router.get('/actividades/articulo', isAuthenticated, articulo); 

router.post('/actividades/newArticulo', isAuthenticated, createArticulo); 

router.get('/actividades/libro', isAuthenticated, libro); 

router.post('/actividades/newLibro', isAuthenticated, createLibro); 

router.get('/actividades/CapituloLibro', isAuthenticated, capituloL); 

router.post('/actividades/newCapLibro', isAuthenticated, createCapLibro); 

router.get('/actividades/ReportesTecnicos', isAuthenticated, reporteTec); 

router.post('/actividades/newreporteTec', isAuthenticated, createreporteTec); 

router.get('/actividades/memorias', isAuthenticated, memorias); 

router.post('/actividades/newMemorias', isAuthenticated, createMemorias); 

router.get('/actividades/patentes', isAuthenticated, patentes); 

router.post('/actividades/newPatente', isAuthenticated, createPatente); 

router.get('/actividades/congreso', isAuthenticated, congreso); 

router.post('/actividades/newCongreso', isAuthenticated, createCongreso); 

router.get('/actividades/curso', isAuthenticated, curso); 

router.post('/actividades/newCurso', isAuthenticated, createCurso); 

router.get('/actividades/diplomado', isAuthenticated, diplomado); 

router.post('/actividades/newDiplomado', isAuthenticated, createDiplomado); 

module.exports = router; 