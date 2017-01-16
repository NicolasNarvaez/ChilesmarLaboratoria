
//////////////////////////////////////////////get right configuration
var cfg;
try {
	cfg = require('./cfg.js');
}
catch(e) {
	cfg = require('./cfg.example.js');
}

////////////////////////////////////////////// load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

////////////////////////////////////////////// load config middlewares
app.use(bodyParser.json())

////////////////////////////////////////////// load routes
app.use(function(req, res, next) {
	console.log('processing a request')
	//console.dir(req, {depth:1})
	next()
})

// app.use('/api', )
app.use('/',  express.static("./public"))

////////////////////////////////////////////// run server
app.listen(cfg.port)
console.log("running in "+cfg.port)
