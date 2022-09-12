const sql = require('./db.js');

const Propietarios = function(propietario){
    this.id_propietario = propietario.id_propietario;
    this.nombre = propietario.nombre;
    this.apellidos = propietario.apellidos;
    this.telefono = propietario.telefono;
    this.direccion = propietario.direccion;
    this.email = propietario.email;    
}

Propietarios.create = (newPropietario, result) => {
    sql.query("insert into propietarios set ?", newPropietario, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('created propietario: ', { id: res.insertId, ...newPropietario});
        result(null, { id: res.insertId, ...newPropietario});
    });
};

Propietarios.findById = (id, result) => {
    sql.query(`select * from propietarios where id_propietario = ${id}`, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }

        if(res.length){
          console.log('found propietario: ', res[0]);
          result(null, res[0]);
          return;
        }

        result({ kind: 'not_found'}, null);
    });
};

Propietarios.getAll = (id_propietario, result) => {
    let query = 'select * from propietarios';

    if(id_propietario){
        query += `where id_propietario like '%${id_propietario}%'`;
    }

    sql.query(query, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('propietarios: ', res);
        result(null, res);
    });
};

Propietarios.updateById = (id_propietario, propietario, result) =>{
    sql.query (
        'update propietarios set id_propietario = ?, nombre = ?, apellidos = ?, telefono = ?, direccion = ?, email = ? where id_propietario = ?',
        [propietario.id_propietario, propietario.nombre, propietario.apellidos, propietario.telefono, propietario.direccion, propietario.email, id_propietario],
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

            console.log('updated propietario: ', {id: id_propietario, ...propietario});
            result(null, {id: id_propietario, ...propietario});
        }
    );
}

Propietarios.remove = (id_propietario, result) => {
    sql.query('delete from propietarios where id_propietario = ?', id_propietario, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        }

        if(res.affectedRows == 0){
            result({ kind: 'not_found'}, null);
            return;
        }

        console.log('deleted propietario with id: ', id_propietario);
        result(null, res);
    });
};

Propietarios.removeAll = result => {
    sql.query('delete from propietariosNone', (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} propietarios`);
        result(null, res);
    });
};

module.exports = Propietarios;
