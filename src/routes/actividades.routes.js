const { Router } = require('express');
const router = Router();

const {
    agregarTipos,
    articulo,
    createArticulo,
    verarticulos,
    libro,
    createLibro,
    verlibros,
    capituloL,
    createCapLibro,
    vercapitulos,
    reporteTec,
    createreporteTec,
    verreportes,
    memorias,
    createMemorias,
    vermemorias,
    patentes,
    createPatente,
    verpatentes,
    congreso,
    createCongreso,
    vercongresos,
    curso,
    createCurso,
    vercursos,
    diplomado,
    createDiplomado,
    verdiplomados,
    createCapacitacion,
    createParticipar,
    verCapacitacion,
    verParticipacion

    
} = require('../controllers/actividades.controller');

const {isAuthenticated} = require('../helpers/auth');

router.get('/actividades/agregarTipo', isAuthenticated, agregarTipos); 

router.get('/actividades/articulo', isAuthenticated, articulo); 
router.post('/actividades/newArticulo', isAuthenticated, createArticulo); 
router.get('/actividades/articulos', isAuthenticated, verarticulos); 

router.get('/actividades/libro', isAuthenticated, libro); 
router.post('/actividades/newLibro', isAuthenticated, createLibro); 
router.get('/actividades/libros', isAuthenticated, verlibros); 

router.get('/actividades/CapituloLibro', isAuthenticated, capituloL); 
router.post('/actividades/newCapLibro', isAuthenticated, createCapLibro); 
router.get('/actividades/capitulos', isAuthenticated, vercapitulos); 

router.get('/actividades/ReportesTecnicos', isAuthenticated, reporteTec); 
router.post('/actividades/newreporteTec', isAuthenticated, createreporteTec); 
router.get('/actividades/reportes', isAuthenticated, verreportes); 

router.get('/actividades/memoria', isAuthenticated, memorias); 
router.post('/actividades/newMemorias', isAuthenticated, createMemorias); 
router.get('/actividades/memorias', isAuthenticated, vermemorias); 

router.get('/actividades/patente', isAuthenticated, patentes); 
router.post('/actividades/newPatente', isAuthenticated, createPatente); 
router.get('/actividades/patentes', isAuthenticated, verpatentes); 

router.get('/actividades/congreso', isAuthenticated, congreso); 
router.post('/actividades/newCongreso', isAuthenticated, createCongreso); 
router.get('/actividades/congresos', isAuthenticated, vercongresos); 

router.get('/actividades/curso', isAuthenticated, curso); 
router.post('/actividades/newCurso', isAuthenticated, createCurso); 
router.get('/actividades/cursos', isAuthenticated, vercursos); 

router.get('/actividades/diplomado', isAuthenticated, diplomado); 
router.post('/actividades/newDiplomado', isAuthenticated, createDiplomado); 
router.get('/actividades/diplomados', isAuthenticated, verdiplomados);

router.post('/actividades/createCapacitacion', isAuthenticated, createCapacitacion); 
router.post('/actividades/createParticipar', isAuthenticated, createParticipar); 
router.get('/actividades/Capacitaciones', isAuthenticated, verCapacitacion);
router.get('/actividades/Participantes', isAuthenticated, verParticipacion);





module.exports = router; 