/**userRouter.js
 * 
 * description: contains all route definitions for our API user resource
 * 
 * Note: router assumes all paths _already_ start with http://localhost:3000/users
 * 
 */

//import helpers
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//getting all users
//method: GET
//path: http://localhost:3000/users
//resp: array of JSON data
router.get("/", (request, response) => {
    response.status(200).json({message: "you requested all the users"});
});

//getting one user by username
//method: GET
//path: http://localhost:3000/users/:theUserName
//resp: single JSON object

//deleting a user (by user Id)
//method: DELETE
//path :  http://localhost:3000/users/:theUserId
//resp:   successful deletion

//adding a user
//method: POST
//path:   http://localhost:3000/users/
//resp:   successful addition

//editing a user (by user Id)
//method: PUT
//path :  http://localhost:3000/users/:theUserId
//resp:   successful update

//export the router to make it available to main server.js
module.exports = router;