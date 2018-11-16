const express = require('express');
const router = express.Router();
const model1 = require("../model");
const dotenv = require("dotenv/config");

/* GET home page. */
router.use((req, res, next) => {
  res.locals.info = "Hi, We are glad to be here, as yourself one question, what will you if you weren't afraid, what would you try if you were sure you would never fail. Think =, now go do those thimgs. Goodluck and tell us your experience";
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home'});
});

router.post('/submit', (req, res, next) => {
  var items = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  }

  var newUser = new model1(items);
  newUser.save();
  res.redirect('/users/');
})

router.get('/messages', (req, res, next) => {
  model1.find()
    .then(function(docs) {
      res.render('messages', {page: 'Messages', menuId: 'Messages', items: docs})
    })
  // res.send("Maya!");
})

 

console.log(process.env.SECRET_MESSAGE);

module.exports = router;
