const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* *******USER**************/

const userControllers = require("./controllers/userControllers");

router.get("/api/user", userControllers.browse);
router.get("/api/user/:id", userControllers.read);
router.put("/api/user/edit/:id", userControllers.edit);
router.put("/api/user/editById/:id", userControllers.editById);
router.post("/api/user/register",userControllers.add);
router.delete("/api/user/:id", userControllers.destroy);

router.post(
    "/api/user/login",userControllers.getUserForConection);


const contactControllers = require("./controllers/contactControllers")

router.get("/api/demande_de_contact", contactControllers.browse);
router.get("/api/demande_de_contact/:id", contactControllers.read);
router.put("/api/demande_de_contact/:id", contactControllers.edit);
router.put("/api/demande_de_contact/editById/:id", contactControllers.editById);
router.post("/api/demande_de_contact/register",contactControllers.add);
router.delete("/api/demande_de_contact/:id", contactControllers.destroy);

const annoncesControllers = require("./controllers/annonceControllers");

router.get("/api/annonce", annoncesControllers.browse)
router.get("/api/annonce/:id", annoncesControllers.read)
router.put("/api/annonce/:id", annoncesControllers.edit)
router.put("/api/annonce/editById/:id", annoncesControllers.editById)
router.post("/api/annonce/register", annoncesControllers.add)
router.delete("/api/annonce/suppression/:id", annoncesControllers.destroy)



module.exports = router;
