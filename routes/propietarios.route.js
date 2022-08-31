module.exports = app => {
    const propietarios = require('../controllers/propietarios.controller.js');

    let router = require('express').Router();

    router.get('/', propietarios.findAll);

    router.post('/', propietarios.create);

    router.get('/:id', propietarios.findOne);

    router.put('/:id', propietarios.update);

    router.delete('/:id', propietarios.delete);

    // Netfeado para evitar desastres xd
    //router.delete('/', propietarios.deleteAll);

    app.use('/api/propietarios', router);

}