$( document ).ready(function(ev) {
	ev.preventDefault;
	$(".recetario").hide();
	$("#registro").hide();
	$(".perfil-pescador").hide();
	$("#datos-pescadores").hide();
	$("#enciclopedia").hide();
	$(".mod").hide();

	 $(".fa-sort-desc").click(function(){  		
  		$("#banner").slideUp();
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
  		$( "#modulo" ).append("<section class='mod'><div class='container text-center'><h3>Escoge tu tipo de perfil</h3><img src='img/icono_1.png' class='col-md-offset-1 col-md-4'><img src='img/icono_2.png' class='col-md-4 col-md-offset-2'></div></section>");
  	});
  	$("#enciclopedia-btn").click(function(){
  		$("#enciclopedia").show();
  	});
});	 

























