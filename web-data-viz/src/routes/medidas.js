var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})


router.post("/ganhar", function (req, res) {
    medidaController.ganhar(req, res);
})
router.post("/perder", function (req, res) {
    medidaController.perder(req, res);
})
router.get("/obterdados", function (req, res) {
    medidaController.obterdados(req, res);
})

module.exports = router;