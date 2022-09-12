const Contrato = require('../models/contratos.model.js');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Content cannot be empty!'
        });
    };

    const contrato = new Contrato({
        id_contrato: req.body.id_contrato,
        fecha_fin_alquiler: req.body.fecha_fin_alquiler,
        fecha_firma: req.body.fecha_firma,
        fecha_inicio_alquiler: req.body.fecha_inicio_alquiler,
        importe: req.body.importe,
        id_inquilino: req.body.id_inquilino,
        id_vivienda: req.body.id_vivienda
    });

    Contrato.create(contrato, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving contrato.'
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    const id_contrato = req.query.id_contrato;

    Contrato.getAll(id_contrato, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving contrato.'
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Contrato.findById(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found contrato with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        "Error retrieving contrato with id " + req.params.id
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

    Contrato.updateById(
        req.params.id,
        new Inquilino(req.body),
        (err, data) => {
            if(err){
                if(err.kind === 'not_found'){
                    res.status(404).send({
                        message:
                            `Not found contrato with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message:
                            'Error updating contrato with id ' + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Contrato.remove(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message:
                        `Not found contrato with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message:
                        'Could not delete contrato with id: ' + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.deleteAll = (req, res) => {
    Contrato.removeAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while removing all contratos.'
            });
        else res.send({ message: `All contratos were deleted successfully`});
    });
};
