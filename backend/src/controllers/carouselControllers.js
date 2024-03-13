const models = require("../models/")

const browse = (req, res) => {
    models.avis_client
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
    models.avis_client
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
    const avis_client = req.body;
  
    // TODO validations (length, format...)
  
    user.id = parseInt(req.params.id, 10);
  
    models.avis_client
      .update(avis_client)
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
    const avis_client = req.body;
  
    // TODO validations (length, format...)
  
    avis_client.id = parseInt(req.params.id, 10);
  
    models.avis_client
      .updateById(avis_client)
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
    const avis_client = req.body;
  
    // TODO validations (length, format...)
  
    models.avis_client
      .insert(demande_de_contact)
      .then(([result]) => {
        res.location(`/api/avis_client/${result.insertId}`).sendStatus(201);
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
    models.avis_client
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