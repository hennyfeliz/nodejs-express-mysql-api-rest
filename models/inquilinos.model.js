const sql = require("./db.js");

const Inquilinos = function (inquilino) {
  this.id_inquilino = inquilino.id_inquilino;
  this.nombre = inquilino.nombre;
  this.apellido = inquilino.apellido;
  this.fecha_nacimiento = inquilino.fecha_nacimiento;
  this.telefono = inquilino.telefono;
  this.descripcion_preferencia = inquilino.descripcion_preferencia;
};

Inquilinos.create = (newInquilino, result) => {
  sql.query("insert into inquilinos set ?", newInquilino, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created inquilino: ", { id: res.insertId, ...newInquilino });
    result(null, { id: res.insertId, ...newInquilino });
  });
};

Inquilinos.findById = (id, result) => {
  sql.query(
    `select * from inquilinos where id_inquilino = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found inquilino: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    }
  );
};

Inquilinos.getAll = (id_inquilino, result) => {
  let query = "select * from inquilinos";

  if (id_inquilino) {
    query += `where id_inquilino like '%${id_inquilino}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("inquilinos: ", res);
    result(null, res);
  });
};

Inquilinos.updateById = (id_inquilino, inquilino, result) => {
  sql.query(
    "update inquilinos set id_inquilino = ?, nombre = ?, apellido = ?, fecha_nacimiento = ?, telefono = ?, descripcion_preferencia = ? where id_inquilino = ?",
    [
      inquilino.id_inquilino,
      inquilino.nombre,
      inquilino.apellido,
      inquilino.fecha_nacimiento,
      inquilino.telefono,
      inquilino.descripcion_preferencia,
      id_inquilino,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated inquilino: ", { id: id_inquilino, ...inquilino });
      result(null, { id: id_inquilino, ...inquilino });
    }
  );
};

Inquilinos.remove = (id_inquilino, result) => {
  sql.query(
    "delete from inquilinos where id_inquilino = ?",
    id_inquilino,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted inquilino with id: ", id_inquilino);
      result(null, res);
    }
  );
};

Inquilinos.removeAll = (result) => {
  sql.query("delete from inquilinosNone", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} inquilinos`);
    result(null, res);
  });
};

module.exports = Inquilinos;
