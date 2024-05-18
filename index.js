const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.set('strictQuery', true);

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/saloon");
        console.log("DB Connectedddd!!!!!!!!!!!");
    } catch (error) {
        console.log(error);
    }
}

connectDB();

app.use(cors());
app.use(express.json());

app.listen(8186, function port(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Port Connectedddd!!!!!!!!!!! 8086");
    }
});
