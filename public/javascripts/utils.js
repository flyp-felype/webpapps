var doAjax = function(req){
	
	var final = {};

	$.ajax({
		type: 'POST',
		data: JSON.stringify(req),
	    contentType: 'application/json',
	    url: 'http://localhost:3000/categories',	
	    async: Boolean(false),
	    success: function(data) {
    		final = data;
	    },
        error: function (xhr, status, error) {
            alert(xhr.responseText);
            final = "error";
        }
	});    

	return final;
}