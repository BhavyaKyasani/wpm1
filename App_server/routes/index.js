var express = require('express');
var router = express.Router();

// ...existing code...
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page - Ready for Render Deployment' });
});
// ...existing code...

module.exports = router;