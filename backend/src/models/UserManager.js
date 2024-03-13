const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
    constructor() {
        super({ table: "user" });
    }

insert(user) {
    return this.database.query(
        `INSERT INTO ${this.table} (nom, mot_de_passe) VALUES (?, ?)`,
        [user.nom, user.mot_de_passe]
    );
}

update(user) {
    return this.database.query(
        `UPDATE ${this.table} SET nom = ?, mot_de_passe = ? WHERE id = ?`,
        [user.nom, user.mot_de_passe, user.id]
    );
}

}
module.exports = UserManager;