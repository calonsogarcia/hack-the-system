const Theory = require("../models/Theory.model");
const router = require('express').Router();

//TODO: List
router.get('/list', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    Theory.find((err, data) => {
       if (err) {
           res.status(400);
           res.end(JSON.stringify({message: 'Theory list error'}));
       } else {
           res.end(JSON.stringify(data));
        }
   })
});
//TODO: Create
router.post('/create', (req, res, next) => {
    const {title, content, course_id} = req.body;
    res.setHeader('Content-Type', 'application/json');
    
    var theory = new Theory({
        title, content, course_id
    });

    theory.save((err, data) => {
        if (err){
            res.status(400);
            console.log(err);
            res.end(JSON.stringify({message:"Form error"}));
        } else {
            res.end(JSON.stringify(data));
        }
    })
})
//TODO: Get
//TODO: Update
//TODO: Delete

module.exports = router;