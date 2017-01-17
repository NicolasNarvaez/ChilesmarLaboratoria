$( document ).ready(function() {
	$(".recetario").hide();

	$( "#receta-btn" ).click(function() {
  		$( ".recetario" ).slideDown("slow");
  	});

  	$( ".ocultar" ).click(function() {
  		$( ".recetario" ).slideUp("slow");
  	});

});


