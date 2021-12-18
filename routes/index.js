const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET API STATUS */
router.get("/api/status", (req, res, next) => {
  // Con esto le decimos al API que nos va a devolver un JSON
  res.setHeader('Content-Type', 'application/json');
  // TODO: Toda la lógica iría aquí dentro

  // Esta última instrucción devolverá el objeto como un JSON
  res.end(JSON.stringify({
    name: "ZAP",
    version: "v1"
  }));
});

module.exports = router;
