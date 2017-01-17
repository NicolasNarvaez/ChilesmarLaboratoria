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
	Auth,
	AuthSchema,
	Pescador,
	PescadorSchema,

	Especie,
	EspecieSchema,
	Producto,
	ProductoSchema,
	Receta,
	RecetaSchema,
	Calificacion,
	CalificacionSchema;

	/**
	@namespace modelo
	*/
	if(mongoose) {
		var Schema = mongoose.Schema,
		SchemaObjId = Schema.Types.ObjectId;

		/**
		@class Usuario
		@memberof modelo
		@prop {String} Nombre
		*/
		AuthSchema = new Schema({
			nombre: String,
			clave: String,
			email: String,
			user: {type: Schema.ObjectId, ref: 'Pescador'},
			georef: {
				type: [Number],  // [<longitude>, <latitude>]
				index: '2d'      // create the geospatial index
			},
			auth_token: String,
		});
		Auth = mongoose.model('Auth', AuthSchema);

		/**
		@class Pescador
		@memberof modelo
		@prop {String} Nombre
		*/
		PescadorSchema = new Schema({
			metodo_captura: String,
			productos: [{type: Schema.ObjectId, ref: 'Producto'}],
			foto: String,
			token_gobierno: String,
			tienda_georef: {
				type: [Number],  // [<longitude>, <latitude>]
				index: '2d'      // create the geospatial index
			},
			descripcion: String,
			telefono: String
		});
		Pescador = mongoose.model('Pescador', PescadorSchema);

		EspecieSchema = new Schema({
			nombre: String,
			foto: String,
			descripcion: String
		});
		Especie = mongoose.model('Especie', EspecieSchema);

		ProductoSchema = new Schema({
			pescador: {type: Schema.ObjectId, ref: 'Pescador'},
			especie: {type: Schema.ObjectId, ref: 'Especie'},
			cantidad: Number,
			precio: Number
		});
		Producto = mongoose.model('Producto', ProductoSchema);

		RecetaSchema = new Schema({
			ingredientes: [{type: Schema.ObjectId, ref: 'Producto'}],
			foto: String,
			nombre: String,
			desc: String,
			precio: Number,
			puntos: Number,
			votos: Number,
		})
		Receta = mongoose.model('Receta', RecetaSchema);

		CalificacionSchema = new Schema({
			usuario: {type: Schema.ObjectId, ref: 'Auth'},
			receta: {type: Schema.ObjectId, ref: 'Receta'},
			puntos: Number
		})
		Calificacion = mongoose.model('Calificacion', RecetaSchema);
	}
	mongoose = false
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

  interface_obj = {
    connect: connect,
    connection: null,
    mongoose: mongoose,
    SchemaObjId: SchemaObjId,
    config: config,

    Auth: Auth,
    AuthSchema: AuthSchema,
	Pescador: Pescador,
    PescadorSchema: PescadorSchema,
    Receta : Receta,
    RecetaSchema : RecetaSchema,
    Especie: Especie,
    EspecieSchema: EspecieSchema
  };
  return interface_obj;
})();
