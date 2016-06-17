var $pictureList = $('#gallery li a');

function contains(text_one, text_two) {
	if (text_one.indexOf(text_two) != 1)
	return true;
};
// Search filter should be keypress with alt attribute. 
$("#search").on('keyup', function(event){
	// store searchFilter value
	var searchFilter = $('#search').val().toLowerCase();
  		console.log(searchFilter); 
  	$pictureList.each(function(){ // hide/show pictures when search filter searches
  		if ($(this).attr('data-title').search(new RegExp(searchFilter, "i")) < 0) {
        	$(this).hide();
        	$(this).parents('li').hide();// hide li containers
    } 	else {
       		$(this).show();
       		$(this).parents('li').show();// show li containers 
    }
  	});
});


	




	



