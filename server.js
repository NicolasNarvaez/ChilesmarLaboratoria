var cfg = require('./cfg.js'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express();


app.use(bodyParser.json())

app.use(function(req, res, next) {
	console.log('processing a request')
	//console.dir(req, {depth:1})
	next()
})

app.use('/',  express.static("./public"))


app.listen(cfg.port)
console.log("running in "+cfg.port)
