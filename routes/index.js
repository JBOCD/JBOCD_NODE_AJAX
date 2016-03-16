var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var session = req.session;
	if(session && session.login){
		res.render('index', { title: 'JBOCD Login', session: req.session });
	}else{
		res.render('login', { title: 'JBOCD Unauthorized', session: req.session });
	}
});

module.exports = router;
