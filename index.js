const express = require('express')
const app = express()

const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/dbschool",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDB(error)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});
