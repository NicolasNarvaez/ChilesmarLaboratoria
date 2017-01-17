$( document ).ready(function(ev) {
	ev.preventDefault;
	$(".recetario").hide();

	$( "#receta-btn" ).click(function() {
  		$( ".recetario" ).slideDown("slow");
  	});

  	$( ".ocultar" ).click(function() {
  		$( ".recetario" ).slideUp("slow");
  	});

});


