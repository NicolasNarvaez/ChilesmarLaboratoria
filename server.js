
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
  Auth = model.Auth,
  Pescador = model.Pescador,
  mongoose = model.mongoose;

if(mongoose) {
	model.config.dbURI = cfg.dbURI
}

////////////////////////////////////////////// load config middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


////////////////////////////////////////////// load routes
app.use('/',  express.static("./public"))
app.use('/doc',  express.static("./doc"))
app.use('/api', api_router)

api_router.route('/')
.get(function(req, res) {
	res.json({l:'api'})
})

function user_register(data) {
	(new Auth({
		
	}))
	(new Event({
		name_normal: data.name_normal,
		name: data.name,
		desc: String(data.desc),
		date: parseInt(data.date),
		creator: user._id,
		manager: user._id,
		managers: [],
		gests: [],
		gests_length: data.gests_length,
	})).save(function(err, event) {
		if(err || !event) {
			Place.findByIdAndRemove(place._id).exec();
			res.json({err:err});
			return;
		}
	})
}

api_router.route('/usuarios/pescador')
	/**
	usuario : jQuery.ajax({url: (/^.*[^#]/).exec(document.URL)+"api/usuarios/", method: "POST", success: function(res) {console.log(res)}, data: {nombre: "nico", clave: "nico", email: "mail@mail"} })
	pescador jQuery.ajax({url: (/^.*[^#]/).exec(document.URL)+"api/usuarios/", method: "POST", success: function(res) {console.log(res)}, data: {nombre: "nico", clave: "nico", email: "mail@mail"} })
	*/
	.post(function(req, res) {
		console.log(req)
		res.json(req.body)
		return



		res.json('posting')
	})
api_router.route('/usuarios/normal')
	.post(function(req, res) {

	})

api_router.route('/usuarios')
	.get(function(req, res) {
		res.json('asd')
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
