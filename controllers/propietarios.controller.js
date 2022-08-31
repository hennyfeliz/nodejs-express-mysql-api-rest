const Propietario = require('../models/propietarios.model.js');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Content cannot be empty!'
        });
    };

    const propietario = new Propietario({
        id_propietario: req.body.id_propietario,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        email: req.body.email
    });

    Propietario.create(propietario, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving propietario.'
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    const id_propietario = req.query.id_propietario;

    Propietario.getAll(id_propietario, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving propietario.'
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Propietario.findById(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found propietario with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        "Error retrieving propietario with id " + req.params.id
                });
            } 
        } 
        else res.send(data);
    });
};

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message:
                'Content cannot be empty!'
        });
    }

    console.log(req.body);

    Propietario.updateById(
        req.params.id,
        new Inquilino(req.body),
        (err, data) => {
            if(err){
                if(err.kind === 'not_found'){
                    res.status(404).send({
                        message:
                            `Not found propietario with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message:
                            'Error updating propietario with id ' + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Propietario.remove(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found propietario with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        'Could not delete propietario with id: ' + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.deleteAll = (req, res) => {
    Propietario.removeAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while removing all propietarios.'
            });
        else res.send({ message: `All propietarios were deleted successfully`});
    });
};
