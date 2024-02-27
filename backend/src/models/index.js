require("dotenv").config()

const mysql = require("mysql2/promise")

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

const models = {};

const UserManager = require("./UserManager");
const ContactManager = require("./ContactManager");
const AnnonceManager = require("./AnnonceManager");

models.user = new UserManager
models.demande_de_contact = new ContactManager
models.annonce = new AnnonceManager

models.user.setDatabase(pool)
models.demande_de_contact.setDatabase(pool)
models.annonce.setDatabase(pool)

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};
module.exports = new Proxy(models, handler)