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
    const { issn, doi, nom_articulo, nom_revista, titulo_revista, fecha_publicacion, area, rol } = req.body;
    const newArticulo = new Articulo({ issn, doi, nom_articulo, nom_revista, titulo_revista, fecha_publicacion, area, rol });
    newArticulo.user = req.user.id;
    await newArticulo.save();
    req.flash('success_msg', 'Articulo creado correctamente');
    res.redirect('/rol');

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
    const { isbn, titulo_libro, pais, idioma, fecha_publicacion, editorial, edicion } = req.body;
    const newLibro = new Libro({ isbn, titulo_libro, pais, idioma, fecha_publicacion, editorial, edicion });
    newLibro.user = req.user.id;
    await newLibro.save();
    req.flash('success_msg', 'Libro creado correctamente');
    res.redirect('/rol');
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
    const { isbn, titulo_libro, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_Capitulo} = req.body;
    const newCapLibro = new CapLibro({ isbn, titulo_libro, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_Capitulo });
    newCapLibro.user = req.user.id;
    await newCapLibro.save();
    req.flash('success_msg', 'Capitulo de libro creado correctamente');
    res.redirect('/rol'); 
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
    const { titulo, empresa, fecha_entrega, descripcion, objetivos} = req.body;
    const newReporteTec = new ReporteTec({ titulo, empresa, fecha_entrega, descripcion, objetivos});
    newReporteTec.user = req.user.id;
    await newReporteTec.save();
    req.flash('success_msg', 'Reporte tecnico creado correctamente');
    res.redirect('/rol'); 
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
    const { isbn, titulo_libro, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_capitulo} = req.body;
    const newMemoria = new Memoria({ isbn, titulo_libro, pais, idioma, fecha_publicacion, editorial, edicion, titulo_capitulo, num_capitulo, pag_capitulo });
    newMemoria.user = req.user.id;
    await newMemoria.save();
    req.flash('success_msg', 'Memoria creada correctamente');
    res.redirect('/rol'); 
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
    const { nombreS, nitS, nacionalidadS, paisS, edadS, nombreP, nitP, nacionalidadP, paisP, nombreI, nitI, nacionalidadI, paisI, edadI} = req.body;
    const newPatente = new Patente({nombreS, nitS, nacionalidadS, paisS, edadS, nombreP, nitP, nacionalidadP, paisP, nombreI, nitI, nacionalidadI, paisI, edadI});
    newPatente.user = req.user.id;
    await newPatente.save();
    req.flash('success_msg', 'Patente creado correctamente');
    res.redirect('/rol'); 
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
    const { nombre, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año} = req.body;
    const newCongreso = new Congreso({nombre, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año});
    newCongreso.user = req.user.id;
    await newCongreso.save();
    req.flash('success_msg', 'Congreso creado correctamente');
    res.redirect('/rol'); 
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
    const { nombre, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año} = req.body;
    const newCurso = new Curso({nombre, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año});
    newCurso.user = req.user.id;
    await newCurso.save();
    req.flash('success_msg', 'Curso creado correctamente');
    res.redirect('/rol'); 
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
    const { nombre, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año} = req.body;
    const newDiplomado = new Diplomado({nombre, horas, fecha_inicio, fecha_termino, nivel_escolaridad, area_conocimineto, institucion, año});
    newDiplomado.user = req.user.id;
    await newDiplomado.save();
    req.flash('success_msg', 'Diplomado creado correctamente');
    res.redirect('/rol'); 
};

module.exports = actividadesCtrl;