const express = require("express");
const multer = require("multer");

const router = express.Router();



/* *******USER**************/

const userControllers = require("./controllers/userControllers");

router.get("/api/user", userControllers.browse);
router.get("/api/user/:id", userControllers.read);
router.put("/api/user/edit/:id", userControllers.edit);
router.put("/api/user/editById/:id", userControllers.editById);
router.post("/api/user/register", userControllers.add);
router.delete("/api/user/:id", userControllers.destroy);

// router.post(
//   "/api/user/login", userControllers.getUserForConection);

/* *******demande_de_contact**************/

const contactControllers = require("./controllers/contactControllers")

router.get("/api/demande_de_contact", contactControllers.browse);
router.get("/api/demande_de_contact/:id", contactControllers.read);
router.put("/api/demande_de_contact/:id", contactControllers.edit);
router.put("/api/demande_de_contact/editById/:id", contactControllers.editById);
router.post("/api/demande_de_contact/register", contactControllers.add);
router.delete("/api/demande_de_contact/:id", contactControllers.destroy);



/* *******avis_client**************/

const avis_clientControllers = require("./controllers/avis_clientControllers")

router.get("/api/avis_client", avis_clientControllers.browse);
router.get("/api/avis_client/:id", avis_clientControllers.read);
router.put("/api/avis_client/:id", avis_clientControllers.edit);
router.put("/api/avis_client/editById/:id", avis_clientControllers.editById);
router.post("/api/avis_client/register", avis_clientControllers.add);
router.delete("/api/avis_client/:id", avis_clientControllers.destroy);

/* *******annonce**************/

const annoncesControllers = require("./controllers/annonceControllers");


router.get("/api/annonce", annoncesControllers.browseWithImages)
router.get("/api/annonce/:id", annoncesControllers.findById)
router.put("/api/annonce/:id", annoncesControllers.edit)
router.put("/api/annonce/editById/:id", annoncesControllers.editById)
router.post("/api/annonce/register", annoncesControllers.add)
router.delete("/api/annonce/suppression/:id", annoncesControllers.destroy)


/* *******email**************/

const mailControllers = require("./controllers/mailControllers");

router.post("/api/email", mailControllers.sendUserAccountCreation);
router.post("/api/email/company", mailControllers.sendCompanyAccountCreation);
router.post("/api/email/contact", mailControllers.sendContactMessageMail);
router.post("/api/email/resetpassword", mailControllers.sendPasswordResetMail);
router.post(
  "/api/email/resetpasswordCompany",
  mailControllers.sendPasswordResetCompany
);


const carouselControllers = require("./controllers/carouselControllers");

// Route pour récupérer les données pour le carrousel
router.get("/api/carousel", carouselControllers.browse);
router.get("/api/carousel/:id", carouselControllers.read);
router.put("/api/carousel/:id", carouselControllers.edit);
router.post("/api/carousel/register", carouselControllers.add);
router.delete("/api/carousel/:id", carouselControllers.destroy);

const imageControllers = require("./controllers/imagesControllers");

router.get("api/annonce/:id/image",imageControllers.browse)
router.get("api/annonce/:id/image",imageControllers.read)
router.get("api/annonce/:id/image",imageControllers.editById)
router.get("api/annonce/:id/image",imageControllers.edit)
router.get("api/annonce/:id/image",imageControllers.destroy)
router.post("/api/annonce/:id/image",imageControllers.addImage)

//Configuration Multer

const storage = multer.diskStorage({
  destination(req, res, cd){
    cb(null,"images/")
  },
  filename(req, file, cb){
    req.fname = file.originalname;
    cb(null, file.originalname); 
  }
})

const upload = multer({storage})
router.post(
  "/api/annonce/register",
  upload.array('images', 10),
  annoncesControllers.addImage,

)


module.exports = router;