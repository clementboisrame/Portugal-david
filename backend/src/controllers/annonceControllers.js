const models = require("../models/");

const browse = (req, res) => {
  models.annonce
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const annonce = await models.annonce.findById(id);
    if (!annonce) {
      res.sendStatus(404);
    } else {
      res.send(annonce);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const read = (req, res) => {
  models.annonce
    .find(req.params.id)
    .then((rows) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const annonce = req.body;

  annonce.id = parseInt(req.params.id, 10);

  models.annonce
    .update(annonce)
    .then((result) => {
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
  const annonce = req.body;

  annonce.id = parseInt(req.params.id, 10);

  models.annonce
    .updateById(annonce)
    .then((result) => {
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

  models.annonce
    .insert(annonce)
    .then((result) => {
      res.location(`/api/annonce/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.annonce
    .deleteWithImages(id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addImage = async (req, res) => {
  const annonceId = req.params.id;
  const imageUrl = req.body.imageUrl;

  models.annonce
    .addImage(annonceId, imageUrl)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseWithImages = (req, res) => {
  models.annonce
    .findAllWithImages()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

async function getAnnonceWithImages(annonceId) {
  try {
    const annonce = await models.annonce.find(annonceId);
    const images = await models.annonce_image.findByAnnonceId(annonceId);
    return { annonce, images };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  browse,
  read,
  edit,
  editById,
  add,
  destroy,
  addImage,
  browseWithImages,
  getAnnonceWithImages,
 findById,
};
