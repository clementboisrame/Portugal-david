const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
    constructor() {
        super({ table: "demande_de_contact" });
    }

    insert(demande_de_contact) {
        return this.database.query(
            `INSERT INTO ${this.table} (nom, prenom, telephone, adresse, sujet, message) VALUES (?,?, ?, ?, ?, ?)`,
            [demande_de_contact.nom,
            demande_de_contact.prenom,
            demande_de_contact.telephone,
            demande_de_contact.adresse,
            demande_de_contact.sujet, 
            demande_de_contact.message]
        );
    }

}

module.exports = ContactManager;