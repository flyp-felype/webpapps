
var express = require('express');
var mongoose = require('mongoose');
var mdlCategories = require('../models/categories.js');
var router = express.Router();

// Database Connection
mongoose.connect('mongodb://localhost/testdb');


router.get('/', function(req, res, next) {

		// Consulta todas as categorias
		mongoose.model('categories').find(function(err, categories){
			var list = { categories:[] };

			for(var i in categories){
				list.categories.push(categories[i]);
			}  	
			res.render('vwCategories', list);
		});
});

router.post('/', function(req, res, next){	
	res.send(req.body);
});

module.exports = router;
