const AbstractManager = require("./AbstractManager");

class AnnonceManager extends AbstractManager {

    constructor() {
        super({ table: "annonce" });
    }

    insert(annonce) {
        return this.database.query(
            `INSERT INTO ${this.table} (titre, description, prix, images)VALUES (?,?,?,?)`,
            [annonce.titre,
            annonce.description,
            annonce.prix,
            annonce.images
            ]
        )
    }

    delete(id) {
        return this.database.query(
            `DELETE FROM ${this.table} WHERE id = ?`,
            [id]
        );
    }

}
module.exports = AnnonceManager;