const express = require("express");
const model = require("../model");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('contact', { page: 'Contact Us', menuId: 'contact'});
});


module.exports = router;