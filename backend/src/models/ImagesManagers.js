const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {

    constructor() {
        super({ table: "annonce_image" }); }

    insert(imageData) {
        return this.database.query(
            `INSERT INTO ${this.table} (annonce_id, path) VALUES (?, ?)`,
            [imageData.annonce_id, imageData.path]
        );
    }

    delete(id) {
        return this.database.query(
            `DELETE FROM ${this.table} WHERE id = ?`,
            [id]
        );
    }

    getImagesForAnnonce(annonceId) {
        return this.database.query(
            `SELECT * FROM ${this.table} WHERE annonce_id = ?`,
            [annonceId]
        );
    }
}

module.exports = ImageManager;
