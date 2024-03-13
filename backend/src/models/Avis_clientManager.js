const AbstractManager = require("./AbstractManager");

class avis_clientManager extends AbstractManager {

  constructor() {
    super({      table: "avis_client"    })
  }
    insert(avis_client) {
      return this.database.query(
        `INSERT INTO ${this.table} (nom, commentaire,  note)VALUE (?,?,?)`,
        [avis_client.nom,
        avis_client.commentaire,
        avis_client.date,
        avis_client.note

        ]
      )
    }

  }

module.exports = avis_clientManager;