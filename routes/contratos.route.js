module.exports = app => {
    const contratos = require('../controllers/contratos.controller.js');

    let router = require('express').Router();

    router.get('/', contratos.findAll);

    router.post('/', contratos.create);

    router.get('/:id', contratos.findOne);

    router.put('/:id', contratos.update);

    router.delete('/:id', contratos.delete);

    // Netfeado para evitar desastres xd
    //router.delete('/', contratos.deleteAll);

    app.use('/api/contratos', router);

}