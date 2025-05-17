const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const ProRoute = require("./Routes/ProRoute");


app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB IS CONNECTED")
})



app.use("/Product", ProRoute);



const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server is Running on ${port} port`);
})