var express = require('express');
var router = express.Router();
var novedadesModel = require('../../modelos/novedadesModel')

/*RENDERING VIEWS*/

router.get('/', async function(req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

/* ELIMINAR NOVEDADES */

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedades(id);
    res.redirect('/admin/novedades')
});



module.exports = router;