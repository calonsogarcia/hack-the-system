const LearningRoute = require("../models/LearningRoute.model");
const router = require("express").Router();

router.get('/list', (req, res, next) => {
    LearningRoute.find((err, data) => {
        if (err) {
            res.end(JSON.stringify({"message": "Learning Path error"}))
        } else {
            res.end(JSON.stringify(data));
        }
    });
});

router.post("/", (req, res, next) => {
    const {
        name,
        description,
        level,
        active,
        routeId,
    } = req.body;
    LearningRoute.create({
        name,
        description,
        level,
        active,
        routeId,
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });


  router.get("/:id", (req, res, next) => {
    LearningRoute.findById(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });
  
  router.patch("/:id", (req, res, next) => {
    const {
        name,
        description,
        level,
        active,
        routeId,
    } = req.body;
    LearningRoute.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        level,
        active,
        routeId,
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });


module.exports = router;