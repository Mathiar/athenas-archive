/**booksController.js
 * 
 * description: contains all functions for CRUD operations on books
 * author: Justin Rybacki
 * 
 * 1/12/2026
 * 
 */

//import helpers
const   Book = require('../models/book');

// getting all books
// method: GET
// resp: array of JSON data with all properities
const getAllBooks = async (request, response) => {
    try {
        const books = await Book.find();
        response.status(200).json(books);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
};

// getting books by genre
// method: GET
// resp: array of JSON objects with title and aveStars only
const getBooksByGenre = async (request, response) => {
	try {
		const theGenre = request.params.theGenre;
		const books = await Book.find({genre: theGenre}, 'title aveStars');
		response.status(200).json(books);
	} catch (error) {
		response.status(500).json({error: error.message});
	}
};

// adding a book
// method: POST
// resp: successful addition
const addBook = async (request, response) => {
    try {
        const newBook = new Book(request.body);
        await newBook.save();
        response.status(201).json({message: "Book added successfully", book: newBook});
    } catch (error) {
        response.status(400).json({error: error.message});
    }
};

// deleting a book (by Id)
// method: DELETE
// resp: successful deletion
const deleteBook = async (request, response) => {
    try {
        const theBookId = request.params.theBookId;
        const deletedBook = await Book.findByIdAndDelete(theBookId);
        if (!deletedBook) {
            return response.status(404).json({message: "Unable to find that book, try a different ID."})
        }
        response.status(200).json({message: "Book deleted successfully", book: deletedBook});
    } catch (error) {
        response.status(500).json({error: error.message});
    }
};

// editing a book (by Id)
// method: PUT
// resp: successful update
const updateBook = async (request, response) => {
    try {
        const theBookId = request.params.theBookId;
        const updatedBook = await Book.findByIdAndUpdate(theBookId, request.body, {new: true});
        if (!updatedBook) {
            return response.status(404).json({message: "Book not found, try a different ID."});
        }
        response.status(200).json({message: "Book updated successfully!", book: updatedBook});
    } catch (error) {
        response.status(400).json({error: error.message});
    }
};

//export all functions
module.exports = {
    getAllBooks,
    getBooksByGenre,
    addBook,
    deleteBook,
    updateBook,
};