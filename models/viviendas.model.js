const sql = require('./db.js');

const Vivienda = function(vivienda){
    this.id_vivienda = vivienda.id_vivienda;
    this.calle = vivienda.calle;
    this.numero = vivienda.numero;
    this.piso = vivienda.piso;
    this.provincia = vivienda.provincia;
    this.municipio = vivienda.municipio;
    this.id_inquilino = vivienda.id_inquilino;
    this.id_propietario = vivienda.id_propietario;
}

Vivienda.create = (newVivienda, result) => {
    sql.query("insert into viviendas set ?", newVivienda, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('created vivienda: ', { id: res.insertId, ...newVivienda});
        result(null, { id: res.insertId, ...newVivienda});
    });
};

Vivienda.findById = (id, result) => {
    sql.query(`select * from viviendas where id_vivienda = ${id}`, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }

        result({ kind: 'not_found'}, null);
    });
};

Vivienda.getAll = (id_vivienda, result) => {
    let query = 'select * from viviendas';

    if(id_vivienda){
        query += `where id_vivienda like '%${id_vivienda}%'`;
    }

    sql.query(query, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('viviendas: ', res);
        result(null, res);
    });
};

Vivienda.updateById = (id_vivienda, vivienda, result) =>{
    sql.query (
        'update viviendas set id_vivienda = ?, calle = ?, numero = ?, piso = ?, provincia = ?, municipio = ?, id_inquilino = ?, id_propietario = ? where id_vivienda = ?',
        [vivienda.id_vivienda, vivienda.calle, vivienda.numero, vivienda.piso, vivienda.provincia, vivienda.municipio, vivienda.id_inquilino, vivienda.id_propietario, id_vivienda],
        (err, res) => {
            if(err){
                console.log('error: ', err);
                result(null, err);
                return;
            }

            if(res.affectedRows == 0){
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('updated vivienda: ', {id: id_vivienda, ...vivienda});
            result(null, {id: id_vivienda, ...vivienda});
        }
    );
}

Vivienda.remove = (id_vivienda, result) => {
    sql.query('delete from viviendas where id_vivienda = ?', id_vivienda, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        }

        if(res.affectedRows == 0){
            result({ kind: 'not_found'}, null);
            return;
        }

        console.log('deleted vivienda with id: ', id);
        result(null, res);
    });
};

Vivienda.removeAll = result => {
    sql.query('delete from viviendasNone', (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} viviendas`);
        result(null, res);
    });
};

module.exports = Vivienda;
