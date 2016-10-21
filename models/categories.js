var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
	title: String,
	cssClass: String
})

mongoose.model('categories', categoriesSchema);