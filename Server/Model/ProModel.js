const mongoose = require("mongoose");
const ProSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    defaultImage:String,
    Image:[String]
})

module.exports = mongoose.model("Product", ProSchema);