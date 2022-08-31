const Vivienda = require('../models/viviendas.model.js');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Content cannot be empty!'
        });
    };

    const vivienda = new Vivienda({
        id_vivienda: req.body.id_vivienda,
        calle: req.body.calle,
        numero: req.body.numero,
        piso: req.body.piso,
        provincia: req.body.provincia,
        municipio: req.body.municipio,
        id_inquilino: req.body.id_inquilino,
        id_provincia: req.body.id_provincia
    })

    Vivienda.create(vivienda, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving viviendas.'
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    const id_vivienda = req.query.id_vivienda;

    Vivienda.getAll(id_vivienda, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving viviendas.'
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Vivienda.findById(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found vivienda with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        "Error retrieving Tutorial with id " + req.params.id
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

    Vivienda.updateById(
        req.params.id,
        new Vivienda(req.body),
        (err, data) => {
            if(err){
                if(err.kind === 'not_found'){
                    res.status(404).send({
                        message:
                            `Not found vivienda with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message:
                            'Error updating vivienda with id ' + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Vivienda.remove(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found vivienda with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        'Could not delete vivienda with id: ' + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.deleteAll = (req, res) => {
    Vivienda.removeAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while removing all viviendas.'
            });
        else res.send({ message: `All viviendas were deleted successfully`});
    });
};
