const models = require("../models/")

const browse = (req, res) => {
    models.annonce
        .findAll()
        .then(([rows]) => {
            res.send(rows);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        })
}

const read = (req, res) => {
    models.annonce
        .find(req.params.id)
        .then(([rows]) => {
            if (rows[0] == null) {
                res.sendStatus(404);
            } else {
                res.send(rows[0])
            }
        })
        .catch((err) => {
            console.error(err)
            res.sendStatus(500);
        })
}
const edit = (req, res) => {
    const annonce = req.body;

    user.id = parseInt(req.params.id, 10)

    models.annonce
        .update(annonce)
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(204)
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500)

        })


}

const editById = (req, res) => {
    const annonce = req.body;
  
    // TODO validations (length, format...)
  
    annonce.id = parseInt(req.params.id, 10);
  
    models.annonce
      .updateById(annonce)
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
    const annonce = req.body;
  
    // TODO validations (length, format...)
  
    models.annonce
      .insert(annonce)
      .then(([result]) => {
        res.location(`/api/annonce/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
       
      });
  };
    
  const destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);

    models.annonce
        .delete(id) // Utilisez la méthode delete définie dans votre modèle annonceManager
        .then(() => {
            res.sendStatus(204); // Renvoyer un statut 204 pour indiquer que la suppression a réussi
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500); // Renvoyer un statut 500 en cas d'erreur
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