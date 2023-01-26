require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
// When strictQuery is set to false, Mongoose will not raise an error when a 
// query is performed that includes fields that are not in the schema. This means 
// that if you perform a query and include a field that is not in the schema, 
// Mongoose will not return an error, and the field will be ignored. If it's set 
// to true, Mongoose will return an error if the query includes fields that are 
// not in the schema.

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    } catch (error) {
        console.log(error);
    };
};

connection(); 