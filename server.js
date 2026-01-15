/** server.js
 * 
 * description: Book review application Athena's Archives for CCC class CS-234W
 * author: Justin Rybacki
 * 
 * 1/11/2026
 * 
 */

//import necessary libraries and frameworks
const express = require('express');
const app = express();
const booksRouter = require('./routes/booksRouter');

//make sure DB connects succesfully
require("./config/db");

//apply server settings
//include express validator (MUST BE LOCATED HERE)
const PORT = 3000;
app.use(express.json());


//routing
//basic test success response
app.get("/", (request, response) => {
    response.status(200).send("Welcome to Athena's Archives a Book Review App!")
});

//Paths for /books to GET list of all books
//NOTE: this NEEDS to be after the app.use(express.json()) statement in order for the server
//to successfully process requests that contain JSON in their body.
app.use("/books", booksRouter);

//catch-all rout for unknown path/method request
app.use((request, response) => {
    response.status(404).json({error: 404, message: "Oops! That path doest not exist!"});
});

// start the server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});