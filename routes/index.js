var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami/', function(req, res, next) {
    //ternary to handle weird browsers like lynx
  console.log(req.headers);
  var userAgentSoftware = (req.headers["user-agent"].split(/[(]|[)]/)[1] ? req.headers["user-agent"].split(/[(]|[)]/)[1] : req.headers["user-agent"]);
  var ipaddress = req.headers["x-forwarded-for"];
  var language = req.headers["accept-language"].split(",")[0];
  res.json({ipaddress:ipaddress,software:userAgentSoftware,language:language});
  
});

module.exports = router;
