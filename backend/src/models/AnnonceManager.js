const AbstractManager = require("./AbstractManager");

class AnnonceManager extends AbstractManager {

    constructor() {
        super({ table: "annonce" });
    }
    findAllWithImages() {
        return this.database.query(`
        SELECT a.id, a.titre, a.description, a.prix, GROUP_CONCAT(ai.image_url SEPARATOR ', ') AS images
        FROM annonce a
        LEFT JOIN annonce_image ai ON a.id = ai.annonce_id
        GROUP BY a.id, a.titre, a.description, a.prix;
        `);
    }
    findById(id) {
        return this.database.query(`
        SELECT a.*, GROUP_CONCAT(ai.image_url SEPARATOR ',') AS images
        FROM annonce a
        LEFT JOIN annonce_image ai ON a.id = ai.annonce_id
        WHERE a.id = ?
        GROUP BY a.id;
        `, [id]);
    }

    insert(annonce) {
        return this.database.query(
            `INSERT INTO ${this.table} (titre, description, prix)VALUES (?,?,?)`,
            [annonce.titre,
            annonce.description,
            annonce.prix
            ]
        )
    }

    

    delete(id) {
        return this.database.query(
            `DELETE FROM ${this.table} WHERE id = ?`,
            [id]
        );
    }
    addImage(annonceId, imageUrl) {
        return this.database.query(
            `INSERT INTO annonce_image (annonce_id, image_url) VALUES (?, ?)`,
            [annonceId, imageUrl]
        );
    }
    
async deleteWithImages(id) {
    try {
        // Supprimer les images associées à l'annonce
        await this.database.query(
            `DELETE FROM annonce_image WHERE annonce_id = ?`,
            [id]
        );

        // Supprimer l'annonce elle-même
        await this.database.query(
            `DELETE FROM ${this.table} WHERE id = ?`,
            [id]
        );
        console.log('Annonce supprimée avec succès.');
    } catch (error) {
        console.error('Erreur lors de la suppression avec images:', error);
        throw error;
    }
}

      
}
module.exports = AnnonceManager;