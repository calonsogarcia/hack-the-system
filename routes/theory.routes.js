const Theory = require("../models/Theory.model");
const router = require('express').Router();

//TODO: List
router.get('/list', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    Theory.find((err, data) => {
       if (err) {
           res.status(400);
       }
   })
});
//TODO: Create
//TODO: Get
//TODO: Update
//TODO: Delete