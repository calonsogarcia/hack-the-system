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


module.exports = router;