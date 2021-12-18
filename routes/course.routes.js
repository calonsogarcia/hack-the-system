const CourseRoute = require("../models/Course.model");
const router = require("express").Router();

router.get('/list', (req, res, next) => {
    CourseRoute.find((err, data) => {
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
        course_id
    } = req.body;
    CourseRoute.create({
        name,
        description,
        course_id
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });


  router.get("/:id", (req, res, next) => {
    CourseRoute.findById(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });
  
  router.patch("/:id", (req, res, next) => {
    const {
        name,
        description,
        course_id
    } = req.body;
    CourseRoute.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        course_id
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });


module.exports = router;