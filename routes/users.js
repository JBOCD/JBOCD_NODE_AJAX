var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	// res.send(JSON.stringify(req.body));
	// res.send(JSON.stringify({result:true}));
	var session = req.session;
	session.login = req.body.user;
	res.redirect('/')
});

module.exports = router;
