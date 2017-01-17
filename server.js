
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

  app = express(),
  api_router = express.Router(),

  model = require('./model.js'),
  mongoose = model.mongoose;

if(mongoose) {
	model.config.dbURI = cfg.dbURI
}

////////////////////////////////////////////// load config middlewares
app.use(bodyParser.json())


////////////////////////////////////////////// load routes
app.use('/',  express.static("./public"))
app.use('/doc',  express.static("./doc"))
app.use('/api', api_router)

api_router.route('/')
.get(function(req, res) {
	res.json({l:'api'})
})

api_router.route('/pescados')
	.get(function(req, res) {
	})

api_router.route('/recetas')
	.get(function(req,res) {
	})


////////////////////////////////////////////// run server
model.connect(function() {
	app.listen(cfg.port)
	console.log("running in "+cfg.port)
})
