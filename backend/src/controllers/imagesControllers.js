const models = require("../models");


const browse = (req, res) => {
  models.annonce_image
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
  models.annonce_image
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
  const annonce_image = req.body;

  user.id = parseInt(req.params.id, 10)

  models.annonce_image
    .update(annonce_image)
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
  const annonce_image = req.body;

  // TODO validations (length, format...)

  annonce_image.id = parseInt(req.params.id, 10);

  models.annonce_image
    .updateById(annonce_image)
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
  const annonce_image = req.body;

  // TODO validations (length, format...)

  models.annonce_image
    .insert(annonce_image)
    .then(([result]) => {
      res.location(`/api/annonce_image/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);

    });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.annonce_image
    .delete(id) // Utilisez la méthode delete définie dans votre modèle annonceManager
    .then(() => {
      res.sendStatus(204); // Renvoyer un statut 204 pour indiquer que la suppression a réussi
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500); // Renvoyer un statut 500 en cas d'erreur
    });
};

const addImage = async (req, res) => {
  const url = process.env.BACKEND_URL_IMAGE + req.fname;

  models.annonce_image
    .addImage(url, req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  editById,
  edit,
  add,
  destroy,
  addImage,
};
