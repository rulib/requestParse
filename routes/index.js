var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami/', function(req, res, next) {
    //ternary to handle weird browsers like lynx
  var userAgentSoftware = (req.headers["user-agent"].split(/[(]|[)]/)[1] ? req.headers["user-agent"].split(/[(]|[)]/)[1] : req.headers["user-agent"]);
  res.json({software:userAgentSoftware});
  
});

module.exports = router;
