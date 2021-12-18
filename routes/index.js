const router = require("express").Router();

const mongoose = require("mongoose");
const Course = require("../models/Course.model");

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

router.get('/api/test', (req, res, next) => {
  var course = new Course({
    name: "Test dos",
    id: "test2",
    description: "Course test"
  });

  course.save(function (err, data){
    if (err){
      console.log(err);
    } else {
      res.end(JSON.stringify({message: "Saved"}))
    }
  })
});

router.get('/api/courses', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  Course.find((err, data) => {
    if(err) {
      console.log("Error on courses");
    } else {
      console.log(data);
      res.end(JSON.stringify(data));

    }
  })
})

module.exports = router;
