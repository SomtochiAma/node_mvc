const express = require('express');
const router = express.Router();

/* GET home page. */
router.use((req, res, next) => {
  res.locals.info = "Hi, We are glad to be here, as yourself one question, what will you if you weren't afraid, what would you try if you were sure you would never fail. Think =, now go do those thimgs. Goodluck and tell us your experience";
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home'});
});

module.exports = router;
