const express = require("express");
const Router = express.Router();
const db = require('../models');

Router.post('/contact-me', (req, res) => {
    db.create(req.body)
        .then(response => res.json(response))
        .catch(error => console.log(error))
})

module.exports = Router;