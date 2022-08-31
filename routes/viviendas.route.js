module.exports = app => {
    const viviendas = require('../controllers/viviendas.controller.js');

    let router = require('express').Router();

    router.get('/', viviendas.findAll);

    router.post('/', viviendas.create);

    router.get('/:id', viviendas.findOne);

    router.put('/:id', viviendas.update);

    router.delete('/:id', viviendas.delete);

    // Netfeado para evitar desastres xd
    //router.delete('/', viviendas.deleteAll);

    app.use('/api/viviendas', router);

}