const ExerciseRoute = require("../models/Exercise.model");
const router = require("express").Router();

router.get('/list', (req, res, next) => {
    ExerciseRoute.find((err, data) => {
        if (err) {
            res.end(JSON.stringify({"message": "Exercise Path error"}))
        } else {
            res.end(JSON.stringify(data));
        }
    });
});

router.post("/", (req, res, next) => {
    const {
        title,
        description,
        answer
    } = req.body;
    ExerciseRoute.create({
        title,
        description,
        answer
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });


  router.get("/:id", (req, res, next) => {
    ExerciseRoute.findById(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });
  
  router.patch("/:id", (req, res, next) => {
    const {
        title,
        description,
        answer
    } = req.body;
    ExerciseRoute.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        answer
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });


module.exports = router;