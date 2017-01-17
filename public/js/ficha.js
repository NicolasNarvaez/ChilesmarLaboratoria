$( document ).ready(function() {

	$(".recetario").hide();
	$("#registro").hide();
	$("#perfil").hide();
	$("#datos-pescadores").hide();
	$("#enciclopedia").hide();
	$(".mod").hide();

  	$( window ).scroll(function() {
  		$( "#banner" ).slideUp( "slow" );
	});

	$( "#receta-btn" ).click(function() {
  		$( ".recetario" ).slideDown("slow");
  	});

  	$( ".ocultar" ).click(function() {
  		$( ".recetario" ).slideUp("slow");
  	});

  	$( "#info" ).click(function() {
  		$( "#datos-pescadores" ).appendTo('.datos-pescadores-padre').slideDown();

  	});
  	$( "#info-2" ).click(function() {
  		$( "#datos-pescadores" ).appendTo('.datos-pescadores-padre').slideDown();

  	});
  	$( ".registro" ).click(function() {
  		$( "#modulo" ).append("<section class='mod'><div class='container text-center'><h3>Escoge tu tipo de perfil</h3><a class='ingresoPe' href='#'><img src='img/icono_1.png' class='col-md-offset-2 col-md-2 ingresoPe'></a><a id='ingreso-usuario' href='#'><img src='img/icono_2.png' class='col-md-2 col-md-offset-2'></a></div></section>");
  		
	  	$(".ingresoPe").click(function(){
	  		console.log("lolololaoalssacbhfjhq");
	  		$("#perfil").fadeIn();

	  		$("#modulo").remove();
	  	});

  });


  	$("#enciclopedia-btn").click(function(){
  		$("#enciclopedia").fadeIn();
  	});

});	 

























