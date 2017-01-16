var cfg;
try {
	cfg = require('./cfg.js');
}
catch(e) {
	cfg = require('./cfg.example.js');
}
console.log(cfg)
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();


app.use(bodyParser.json())

app.use(function(req, res, next) {
	console.log('processing a request')
	//console.dir(req, {depth:1})
	next()
})

// app.use('/api', )
app.use('/',  express.static("./public"))

app.listen(cfg.port)
console.log("running in "+cfg.port)
