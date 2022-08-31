const Inquilino = require('../models/inquilinos.model.js');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Content cannot be empty!'
        });
    };

    const inquilino = new Inquilino({
        id_inquilino: req.body.id_inquilino,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento,
        descripcion_preferencia: req.body.descripcion_preferencia
    })

    Inquilino.create(inquilino, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving inquilino.'
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    const id_inquilino = req.query.id_inquilino;

    Inquilino.getAll(id_inquilino, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving inquilino.'
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Inquilino.findById(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found inquilino with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        "Error retrieving inquilino with id " + req.params.id
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

    Inquilino.updateById(
        req.params.id,
        new Inquilino(req.body),
        (err, data) => {
            if(err){
                if(err.kind === 'not_found'){
                    res.status(404).send({
                        message:
                            `Not found inquilino with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message:
                            'Error updating inquilino with id ' + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Inquilino.remove(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found inquilino with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        'Could not delete inquilino with id: ' + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.deleteAll = (req, res) => {
    Inquilino.removeAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while removing all inquilinos.'
            });
        else res.send({ message: `All inquilinos were deleted successfully`});
    });
};
