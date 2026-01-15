# Athena's Archive - Book Review API

A RESTful API for managing book reviews, built with Node.js, Express, and MongoDB Atlas.

**Author:** Justin Rybacki  
**Course:** CS 234W - Full-Stack Web Development II  
**Term:** Winter 2026  
**Institution:** Clackamas Community College

---

## Project Description

Athena's Archive is a book review API that allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The API provides endpoints to retrieve all books, filter books by genre, add new books, update existing book information, and delete books from the collection.

---

## Database Schema

Each book document contains the following fields:

```javascript
{
  "_id": ObjectId,           // MongoDB auto-generated unique identifier
  "title": String,           // Book (required)
  "author": String,          // Author (required)
  "genre": [String],         // Array of genre tags
  "releaseDate": Date,       // Publication date
  "aveStars": Number         // Average star rating
}
```

---

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB Atlas account
- Git

### Installation

1. **Clone or download the repository**
   - In VS Code, use the Source Control panel
   - Select "Clone Repository" and enter the repository URL
   - Or use the GitHub extension to clone from your GitHub account

2. **Install dependencies**
   - Open the terminal in VS Code
   - Run: 
     npm install

3. **Configure environment variables**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
     MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/books_list?retryWrites=true&w=majority

4. **Set up MongoDB Atlas**
   - Login to MongoDB Atlas at mongodb.com
   - Create a database (e.g., `books_list`)
   - Create a collection named `books`
   - Add at least 3 book documents to the collection

---

## Running the Server

In the VS Code integrated terminal, start the server:

node server.js

You should see: 

DB connection success
server running on port 3000


The API will be available at:  `http://localhost:3000`

---

## API Endpoints

### 1. Get All Books

**Endpoint:** `GET /books`  
**Description:** Retrieves all books with all properties  
**URL:** `http://localhost:3000/books`

**Sample Response:**
json
[
  {
    "_id": "696500cd2cfdb0196ec22a6f",
    "title": "Somewhere Beyond the Sea",
    "author": "T.J. Klune",
    "genre": ["fiction", "fantasy", "humor"],
    "releaseDate":  "2024-09-09T00:00:00.000Z",
    "aveStars": 4.2
  }
]


---

### 2. Get Books by Genre

**Endpoint:** `GET /books/: theGenre`  
**Description:** Retrieves books matching a specific genre (returns only title and aveStars)  
**URL:** `http://localhost:3000/books/fiction`

**Sample Response:**
json
[
  {
    "_id": "696500cd2cfdb0196ec22a6f",
    "title": "Somewhere Beyond the Sea",
    "aveStars": 4.2
  }
]


---

### 3. Add a New Book

**Endpoint:** `POST /books`  
**Description:** Creates a new book entry  
**URL:** `http://localhost:3000/books`  
**Headers:** `Content-Type: application/json`

**Sample Request Body:**
json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "genre": ["fiction", "fantasy", "adventure"],
  "releaseDate": "1937-09-21",
  "aveStars":  4.5
}


**Sample Response:**
json
{
  "message": "Book added successfully",
  "book": { ...  }
}


---

### 4. Delete a Book

**Endpoint:** `DELETE /books/:theBookId`  
**Description:** Deletes a book by its MongoDB ObjectId  
**URL:** `http://localhost:3000/books/696500cd2cfdb0196ec22a6f`

**Sample Response:**
json
{
  "message": "Book deleted successfully",
  "book": { ... }
}


---

### 5. Update a Book

**Endpoint:** `PUT /books/:theBookId`  
**Description:** Updates an existing book's information  
**URL:** `http://localhost:3000/books/696503262cfdb0196ec22a72`  
**Headers:** `Content-Type: application/json`

**Sample Request Body:**
json
{
  "aveStars": 4.9
}


**Sample Response:**
json
{
  "message": "Book updated successfully! ",
  "book": { ...  }
}


---

## Testing

This API was tested using Thunder Client (VS Code extension). All five CRUD operations have been successfully tested. 

---

## License

This project is licensed under GNU General Public License v3.0.