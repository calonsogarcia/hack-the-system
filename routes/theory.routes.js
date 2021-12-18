const Theory = require("../models/Theory.model");
const {Router} = require("express");
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

router.post('/', (req, res, next) => {
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

router.get('/:id', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    Theory.findById(req.params.id).then((data) => {
        res.end(JSON.stringify(data))
    })
})

router.patch('/:id', (req, res, next) => {
    const {title, content, course_id} = req.body;
    res.setHeader('Content-Type', 'application/json');
    Theory.findOneAndUpdate(
        req.params.id,
        {
            title,
            content,
            course_id
        }
    ).then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    })
});

module.exports = router;