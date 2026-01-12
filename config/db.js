/**db.js
 * 
 * description: opens the connection to the MongoDB Atlas "genericSample" database reference in the .env file
 * 
 */

//import libraries
const mongoose =require('mongoose');
require('dotenv').config();

//making the connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connection success'))
    .catch((error) => {console.log("Oops! ", error)});