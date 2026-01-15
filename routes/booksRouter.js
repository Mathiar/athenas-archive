/**booksRouter.js
 * 
 * description: contains all route definitions for book list
 * 
 * author: Justin Rybacki
 * 
 * 1/12/2026
 * 
 */

//import helpers
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const booksController = require('./booksController');

// retrieve all books
// method: GET
// path: http://localhost:3000/books
// resp: array of JSON data
router.get("/", booksController.getAllBooks);

// getting books by genre
// method: GET
// path: http://localhost:3000/books/:theGenre
// resp: array of JSON objects with title and aveStars only
router.get("/:theGenre", booksController.getBooksByGenre);

// adding a book
// method: POST
// path: http://localhost:3000/books
// resp: successful addition
router.post("/", booksController.addBook);

// deleting a book (by Id)
// method: DELETE
// path: http://localhost:3000/books/:theBookId
// resp: successful deletion
router.delete("/:theBookId", booksController.deleteBook);

// updating a book (by Id)
// method: PUT
// path:  http://localhost:3000/books/:theBookId
// resp:  successful update
router.put("/:theBookId", booksController.updateBook);

//export router
module.exports = router;