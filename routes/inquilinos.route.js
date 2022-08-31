module.exports = app => {
    const inquilinos = require('../controllers/inquilinos.controller.js');

    let router = require('express').Router();

    router.get('/', inquilinos.findAll);

    router.post('/', inquilinos.create);

    router.get('/:id', inquilinos.findOne);

    router.put('/:id', inquilinos.update);

    router.delete('/:id', inquilinos.delete);

    // Netfeado para evitar desastres xd
    //router.delete('/', inquilinos.deleteAll);

    app.use('/api/inquilinos', router);

}