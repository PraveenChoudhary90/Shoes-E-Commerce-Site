const express = require("express");
const route = express.Router();
const multer = require('multer');
const path = require('path')
const ProController = require("../Controller/ProController");




// Configure storage engine and filename
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  // Initialize upload middleware and add file size limit
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 } // 1MB file size limit
  }) // 'myFile' is the name attribute of the file input field

route.post("/InsertProduct",upload.array("image", 10),ProController.InsertProducts);
route.get("/DisplayData", ProController.DisplayData);







module.exports = route;