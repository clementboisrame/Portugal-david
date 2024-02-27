const models = require("../models/")

const browse = (req, res) => {
    models.demande_de_contact
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  const read = (req, res) => {
    models.demande_de_contact
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0])
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  
  const edit = (req, res) => {
    const demande_de_contact = req.body;
  
    // TODO validations (length, format...)
  
    user.id = parseInt(req.params.id, 10);
  
    models.demande_de_contact
      .update(demande_de_contact)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  
  const editById = (req, res) => {
    const demande_de_contact = req.body;
  
    // TODO validations (length, format...)
  
    demande_de_contact.id = parseInt(req.params.id, 10);
  
    models.demande_de_contact
      .updateById(demande_de_contact)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  
  const add = (req, res) => {
    const demande_de_contact = req.body;
  
    // TODO validations (length, format...)
  
    models.demande_de_contact
      .insert(demande_de_contact)
      .then(([result]) => {
        res.location(`/api/demande_de_contact/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        if (err.code === "ER_DUP_ENTRY") {
          res.status(400).send("Email deja utilisé");
        } else {
          res.status(500).send("Internal server error");
        }
      });
  };
  
  const destroy = (req, res) => {
    models.demande_de_contact
      .delete(req.params.id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  
  module.exports = {
    browse,
    read,
    edit,
    editById,
    add,
    destroy,
  
  }