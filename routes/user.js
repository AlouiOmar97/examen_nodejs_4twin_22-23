const express = require("express");
const router = express.Router();
const joueurController = require("../controller/joueurController");

router.get("/partie", (req, res, next) => {
  res.render("partie");
});
router.get("/getalljoueur", joueurController.getall);
router.get("/getallpartie", joueurController.getallPartie);
router.get("/getjoueur/:id", joueurController.getbyid);
router.delete("/deleteJoueur/:id", joueurController.deleteJoueur);
router.put("/attaque/:id1/:id2", joueurController.attaque);
router.post("/newjoueur", joueurController.add);
router.post("/newpartie", joueurController.addPartie);

module.exports = router;
