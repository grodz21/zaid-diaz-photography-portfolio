$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox();	
});

//Replaces sub-title below the author's website h1 name
$( "#aboutsite" ).replaceWith( '<div class="col-12" id="aboutsite">' + "Photographer | TEST | Daydreamer" + '</div>' );