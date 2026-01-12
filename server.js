/** server.js
 * 
 * Main server file for the API application
 * The API will interact with a database collection of users
 *  - view all users
 *  - find one user by username
 *  - delete a user
 *  - update a user
 * 
 * 1/05/2026
 * 
 */

//import necessary libraries and frameworks
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');

//make sure DB connects succesfully
require("./config/db");

//apply server settings
const PORT = 3000;
app.use(express.json());


//routing
//basic test success response
app.get("/", (request, response) => {
    response.status(200).send("Welcome to the 2026 API class demo!")
});

//Paths for /users will be handed off to userRouter definition
//NOTE: this NEEDS to be after the app.use(express.json()) statement in order for the server
//to successfully process requests that contain JSON in their body.
app.use("/", userRouter);

//catch-all rout for unknown path/method request
app.use((request, response) => {
    response.status(404).json({error: 404, message: "Oops! That path doest not exist!"});
});

// start the server
app.listen(PORT, () => {
    console.log('server running on port ${PORT}');
});