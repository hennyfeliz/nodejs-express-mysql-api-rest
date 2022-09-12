const sql = require("./db.js");

const Contratos = function (contrato) {
  this.id_contrato = contrato.id_contrato;
  this.fecha_fin_contrato = contrato.fecha_fin_contrato;
  this.fecha_firma = contrato.fecha_firma;
  this.fecha_inicio_alquiler = contrato.fecha_inicio_alquiler;
  this.importe = contrato.importe;
  this.id_inquilino = contrato.id_inquilino;
  this.id_vivienda = contrato.id_vivienda;
};

Contratos.create = (newContrato, result) => {
  sql.query("insert into contrato set ?", newContrato, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created contrato: ", { id: res.insertId, ...newContrato });
    result(null, { id: res.insertId, ...newContrato });
  });
};

Contratos.findById = (id, result) => {
  sql.query(`select * from contrato where id_contrato = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if(res.length){
      console.log('found user: ', res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Contratos.getAll = (id_contrato, result) => {
  let query = "select * from contrato";

  if (id_contrato) {
    query += `where id_contrato like '%${id_contrato}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("contratos: ", res);
    result(null, res);
  });
};

Contratos.updateById = (id_contrato, contrato, result) => {
  sql.query(
    "update contrato set id_contrato = ?, fecha_fin_contrato = ?, fecha_firma = ?, fecha_inicio_contrato = ?, importe = ?, id_inquilino = ?, id_vivienda = ? where id_contrato = ?",
    [
      contrato.id_contrato,
      contrato.fecha_fin_contrato,
      contrato.fecha_firma,
      contrato.fecha_inicio_alquiler,
      contrato.importe,
      contrato.id_inquilino,
      contrato.id_vivienda,
      id_contrato,
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

      console.log("updated contrato: ", { id: id_contrato, ...contrato });
      result(null, { id: id_contrato, ...contrato });
    }
  );
};

Contratos.remove = (id_contrato, result) => {
  sql.query(
    "delete from contrato where id_contrato = ?",
    id_contrato,
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

      console.log("deleted contrato with id: ", id_contrato);
      result(null, res);
    }
  );
};

Contratos.removeAll = (result) => {
  sql.query("delete from contratosNone", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} contratos`);
    result(null, res);
  });
};

module.exports = Contratos;
