var userBlocks;

$(document).ready(function(){

	userBlocks = $('.userBlock');
	category_Click(); 

});

var category_Click = function(){

	$(userBlocks).bind('click', function(e){

		var title = $(e.target).find('.catTitle').text();
		var data = {title : title};

		var retorno = doAjax(data);
		
		alert('A categoria clicada foi: ' + retorno.title);
	})
}


