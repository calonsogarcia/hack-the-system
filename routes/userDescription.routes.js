const router = require("express").Router();
const UserDescription = require("../models/UserDescription.model");

router.get("/all", (req, res, next) => {
    UserDescription.find(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });


router.post("/", (req, res, next) => {
  const {
    descripcionPersonal,
    nivelProgramador,
    leguajesDeProgramacion,
    queQuieroAprender,
  } = req.body;
  UserDescription.create({
    descripcionPersonal,
    nivelProgramador,
    leguajesDeProgramacion,
    queQuieroAprender,
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});


router.get("/:id", (req, res, next) => {
  UserDescription.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.patch("/:id", (req, res, next) => {
  const {
    descripcionPersonal,
    nivelProgramador,
    leguajesDeProgramacion,
    queQuieroAprender,
  } = req.body;
  UserDescription.findByIdAndUpdate(
    req.params.id,
    {
    descripcionPersonal,
    nivelProgramador,
    leguajesDeProgramacion,
    queQuieroAprender,
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

module.exports = router;
