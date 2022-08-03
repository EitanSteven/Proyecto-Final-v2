var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../modelos/usuariosModel')

/*RENDERING VIEWS*/

router.get('/', function(req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

/*CATCHING INFO*/

router.post('/', async (req, res, next) => {
    try {
        
        console.log(req.body);
        var usuario = req.body.usuario;
        var password = req.body.password;

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;