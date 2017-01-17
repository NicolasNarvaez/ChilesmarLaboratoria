module.exports = (function() {

	var mongoose;
	try {
	  mongoose = require('mongoose')
	}
	catch(e) {
	  mongoose = false
	}

	var config = {dbURI: null},
	interface_obj,
	connect,
	Persona,
	PersonaSchema,
	Pescado,
	PescadoSchema,
	Receta,
	RecetaSchema,
	Mercado,
	MercadoSchema;

	/**
	@namespace modelo
	*/
	if(mongoose) {
		var Schema = mongoose.Schema,
		SchemaObjId = Schema.Types.ObjectId;

		/**
		@class Persona
		@memberof modelo
		@prop {String} Nombre
		*/
		PersonaSchema = new Schema({
			nombre: String,
			key: String,
			sess_id: String,
			date_created: Number,
			votos_recetas: {},  //diferentes colecciones, indices inter-repetibles
			votos_mercados: {}
		});

		PescadoSchema = new Schema({
			nombre: String,
			foto: String,
			foto_grande: String,
			desc: String,
			informacion: String
		});
		Pescado = mongoose.model('Pescado', PescadoSchema);

		/*
		RecetaSchema = new Schema({
			nombre: String,
			desc: String,
			foto: String,
			pescados: [SchemaObjId],
			feedback: Number,
			votos: Number
		})
		Receta = mongoose.model('Receta', RecetaSchema);
		*/

		MercadoSchema = new Schema({
			nombre: String,
			dir: String,
			desc: String,
			foto: String,
			pescados: [SchemaObjId],
			feedback: Number,
			votos: Number
		})
		Mercado = mongoose.model('Mercado', MercadoSchema);
	}

	connect = function(callback) {
		if(!mongoose)	{
		  if(callback)
			  callback()
		  return
		}

		var connection,
		  dbURI = config.dbURI;

		 console.log("connecting "+dbURI)

		mongoose.connect(dbURI);
		connection = config.connection = mongoose.connection;

		connection.on('connected', function() {
		  console.log('connectado a: '+dbURI);
		  if(callback) callback();
		});

	}

	mongoose = false

  interface_obj = {
    connect: connect,
    connection: null,
    mongoose: mongoose,
    SchemaObjId: SchemaObjId,
    config: config,

    Mercado: Mercado,
    MercadoSchema: MercadoSchema,
    Receta : Receta,
    RecetaSchema : RecetaSchema,
    Pescado: Pescado,
    PescadoSchema: PescadoSchema
  };
  return interface_obj;
})();
