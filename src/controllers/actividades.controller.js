const actividadesCtrl = {};

const Note = require('../models/Note');

const User = require('../models/User')

const Articulo = require('../models/Articulo')
const Libro = require('../models/Libro')
const CapLibro = require('../models/Capitulo_Libro')
const ReporteTec = require('../models/Reporte_Tecnico')
const Memoria = require('../models/Memorias')
const Congreso = require('../models/Congreso')
const Curso = require('../models/Curso')
const Diplomado = require('../models/Diplomado')
const Patente = require('../models/Patente')

const Capacitacion = require('../models/Capacitacion')
const Participante = require('../models/Participante')



actividadesCtrl.agregarTipos = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('actividades/agregar_tipos_nuev');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/agregar_tipos_nuev');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');
    }
};

actividadesCtrl.articulo = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('actividades/articulo');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/articulo');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');
    }
};

actividadesCtrl.createArticulo = async (req, res) => {
    const { issn, doi, titulo, nom_revista, titulo_revista, fecha_publicacion, area, rol } = req.body;
    const newArticulo = new Articulo({ issn, doi, titulo, nom_revista, titulo_revista, fecha_publicacion, area, rol });
    newArticulo.user = req.user.id;
    newArticulo.filename = req.file.filename;
    newArticulo.path = '/img/uploads/' + req.file.filename;
    newArticulo.originalname = req.file.originalname;
    newArticulo.mimetype = req.file.mimetype;
    newArticulo.size = req.file.size;
    await newArticulo.save();
    req.flash('success_msg', 'Articulo creado correctamente');
    res.redirect('/rol');

};

actividadesCtrl.verarticulos = async (req, res) => {
    const actividad = await Articulo.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Artículo";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.libro = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('actividades/libro');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/libro');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');
    }
};

actividadesCtrl.createLibro = async (req, res) => {
    const { isbn, titulo, pais, idioma, fecha_publicacion, editorial, edicion } = req.body;
    const newLibro = new Libro({ isbn, titulo, pais, idioma, fecha_publicacion, editorial, edicion });
    newLibro.user = req.user.id;
    newLibro.filename = req.file.filename;
    newLibro.path = '/img/uploads/' + req.file.filename;
    newLibro.originalname = req.file.originalname;
    newLibro.mimetype = req.file.mimetype;
    newLibro.size = req.file.size;
    await newLibro.save();
    req.flash('success_msg', 'Libro creado correctamente');
    res.redirect('/rol');
};

actividadesCtrl.verlibros = async (req, res) => {
    const actividad = await Libro.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Libro";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.capituloL = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('actividades/capitulo_libro');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/capitulo_libro');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');
    }
};

actividadesCtrl.createCapLibro = async (req, res) => {
    const { isbn, titulo, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_Capitulo } = req.body;
    const newCapLibro = new CapLibro({ isbn, titulo, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_Capitulo });
    newCapLibro.user = req.user.id;

    newCapLibro.filename = req.file.filename;
    newCapLibro.path = '/img/uploads/' + req.file.filename;
    newCapLibro.originalname = req.file.originalname;
    newCapLibro.mimetype = req.file.mimetype;
    newCapLibro.size = req.file.size;

    await newCapLibro.save();
    req.flash('success_msg', 'Capitulo de libro creado correctamente');
    res.redirect('/rol');
};

actividadesCtrl.vercapitulos = async (req, res) => {
    const actividad = await CapLibro.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Capitulos de Libro";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.reporteTec = async (req, res) => {

    if (req.user.rango === "Maestro") {
        res.render('actividades/reporte_tec');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/reporte_tec');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');
    }
};

actividadesCtrl.createreporteTec = async (req, res) => {
    const { titulo, empresa, fecha_entrega, descripcion, objetivos } = req.body;
    const newReporteTec = new ReporteTec({ titulo, empresa, fecha_entrega, descripcion, objetivos });
    newReporteTec.user = req.user.id;

    newReporteTec.filename = req.file.filename;
    newReporteTec.path = '/img/uploads/' + req.file.filename;
    newReporteTec.originalname = req.file.originalname;
    newReporteTec.mimetype = req.file.mimetype;
    newReporteTec.size = req.file.size;

    await newReporteTec.save();
    req.flash('success_msg', 'Reporte tecnico creado correctamente');
    res.redirect('/rol');
};

actividadesCtrl.verreportes = async (req, res) => {
    const actividad = await ReporteTec.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Reportes técnicos";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.memorias = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('actividades/memorias');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/memorias');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');
    }
};

actividadesCtrl.createMemorias = async (req, res) => {
    const { isbn, titulo, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_capitulo } = req.body;
    const newMemoria = new Memoria({ isbn, titulo, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_capitulo });
    newMemoria.user = req.user.id;

    newMemoria.filename = req.file.filename;
    newMemoria.path = '/img/uploads/' + req.file.filename;
    newMemoria.originalname = req.file.originalname;
    newMemoria.mimetype = req.file.mimetype;
    newMemoria.size = req.file.size;

    await newMemoria.save();
    req.flash('success_msg', 'Memoria creada correctamente');
    res.redirect('/rol');
};

actividadesCtrl.vermemorias = async (req, res) => {
    const actividad = await Memoria.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Memorias";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.patentes = async (req, res) => {

    if (req.user.rango === "Maestro") {
        res.render('actividades/patentes');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/patentes');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');

    }
};

actividadesCtrl.createPatente = async (req, res) => {
    const { nombreS, nitS, nacionalidadS, paisS, edadS, nombreP, nitP, nacionalidadP, paisP, edadP, titulo, nitI, nacionalidadI, paisI,fecha_publicacion } = req.body;
    const newPatente = new Patente({ nombreS, nitS, nacionalidadS, paisS, edadS, nombreP, nitP, nacionalidadP, paisP, edadP, titulo, nitI, nacionalidadI, paisI, fecha_publicacion });
    newPatente.user = req.user.id;

    newPatente.filename = req.file.filename;
    newPatente.path = '/img/uploads/' + req.file.filename;
    newPatente.originalname = req.file.originalname;
    newPatente.mimetype = req.file.mimetype;
    newPatente.size = req.file.size;

    await newPatente.save();
    req.flash('success_msg', 'Patente creado correctamente');
    res.redirect('/rol');
};

actividadesCtrl.verpatentes = async (req, res) => {
    const actividad = await Patente.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Patentes";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.congreso = async (req, res) => {
    if (req.user.rango === "Maestro") {
        res.render('actividades/congreso');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/congreso');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');
    }
};

actividadesCtrl.createCongreso = async (req, res) => {
    const { titulo, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año } = req.body;
    const newCongreso = new Congreso({ titulo, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año });
    newCongreso.user = req.user.id;

    newCongreso.filename = req.file.filename;
    newCongreso.path = '/img/uploads/' + req.file.filename;
    newCongreso.originalname = req.file.originalname;
    newCongreso.mimetype = req.file.mimetype;
    newCongreso.size = req.file.size;

    await newCongreso.save();
    req.flash('success_msg', 'Congreso creado correctamente');
    res.redirect('/rol');
};

actividadesCtrl.vercongresos = async (req, res) => {
    const actividad = await Congreso.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Congresos";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.curso = async (req, res) => {

    if (req.user.rango === "Maestro") {
        res.render('actividades/curso');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/curso');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');

    }
};

actividadesCtrl.createCurso = async (req, res) => {
    const { titulo, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año } = req.body;
    const newCurso = new Curso({ titulo, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año });
    newCurso.user = req.user.id;

    newCurso.filename = req.file.filename;
    newCurso.path = '/img/uploads/' + req.file.filename;
    newCurso.originalname = req.file.originalname;
    newCurso.mimetype = req.file.mimetype;
    newCurso.size = req.file.size;

    await newCurso.save();
    req.flash('success_msg', 'Curso creado correctamente');
    res.redirect('/rol');
};

actividadesCtrl.vercursos = async (req, res) => {
    const actividad = await Curso.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Cursos";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.diplomado = async (req, res) => {

    if (req.user.rango === "Maestro") {
        res.render('actividades/diplomado');
    }

    if (req.user.rango === "Director") {
        res.render('actividades/diplomado');
    }

    if (req.user.rango === "Admin") {
        res.render('administrador/index_administrador');

    }
};

actividadesCtrl.createDiplomado = async (req, res) => {
    const { titulo, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año } = req.body;
    const newDiplomado = new Diplomado({ titulo, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año });
    newDiplomado.user = req.user.id;

    newDiplomado.filename = req.file.filename;
    newDiplomado.path = '/img/uploads/' + req.file.filename;
    newDiplomado.originalname = req.file.originalname;
    newDiplomado.mimetype = req.file.mimetype;
    newDiplomado.size = req.file.size;

    await newDiplomado.save();
    req.flash('success_msg', 'Diplomado creado correctamente');
    res.redirect('/rol');
};

actividadesCtrl.verdiplomados = async (req, res) => {
    const actividad = await Diplomado.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Diplomados";
    res.render('actividades/actividades', { actividad, nomAct });
};


actividadesCtrl.createCapacitacion = async (req, res) => {
    const { tipo, nombre, institucion, fecha_inicio, fecha_termino, categoria } = req.body;
    const newCapacitacion = new Capacitacion({ tipo, nombre, institucion, fecha_inicio, fecha_termino, categoria });
    newCapacitacion.user = req.user.id;

    newCapacitacion.filename = req.file.filename;
    newCapacitacion.path = '/img/uploads/' + req.file.filename;
    newCapacitacion.originalname = req.file.originalname;
    newCapacitacion.mimetype = req.file.mimetype;
    newCapacitacion.size = req.file.size;

    await newCapacitacion.save();
    req.flash('success_msg', 'creado correctamente');
    res.redirect('/actividades/NuevasActividades');
};

actividadesCtrl.createParticipar = async (req, res) => {
    const { tipo, nombre, institucion, fecha } = req.body;
    const newParticipante = new Participante({ tipo, nombre, institucion, fecha });
    newParticipante.user = req.user.id;

    newParticipante.filename = req.file.filename;
    newParticipante.path = '/img/uploads/' + req.file.filename;
    newParticipante.originalname = req.file.originalname;
    newParticipante.mimetype = req.file.mimetype;
    newParticipante.size = req.file.size;

    await newParticipante.save();
    req.flash('success_msg', 'creado correctamente');
    res.redirect('/actividades/NuevasActividades');
};

actividadesCtrl.verCapacitacion = async (req, res) => {
    const actividad = await Capacitacion.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Capacitaciones";
    res.render('actividades/actividades', { actividad, nomAct });
};

actividadesCtrl.verParticipacion = async (req, res) => {
    const actividad = await Participante.find({ user: req.user.id }).sort({ createdAt: 'desc' });
    const nomAct = "Participaciones";
    res.render('actividades/actividades', { actividad, nomAct });
};



module.exports = actividadesCtrl;