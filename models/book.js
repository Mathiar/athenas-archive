/** book.js
 * 
 * description: Book model
 * author: Justin Rybacki
 * 
 * 1/11/2026
 * 
 */

// import libraries
const mongoose = require('mongoose');

// define schema
const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	genre: {
		type: [String],
	},
	releaseDate: {
		type: Date
	},
	aveStars: {
		type: Number,
		default: 0
	}
});

// create model export
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;