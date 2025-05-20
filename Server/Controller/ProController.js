const ProModel = require("../Model/ProModel");


const InsertProducts = async(req,res)=>{
    const { name,brand,price} = req.body;
    const ImageUrl = req.files.map(file=>file.path);
    try {
        const Product = await ProModel.create({
            name:name, 
            brand:brand,
            price:price,
            defaultImage:ImageUrl[0],
            image:ImageUrl

        })
        res.status(200).send({msg:"Your Product is Succefully Inserted"});
    } catch (error) {
        console.log(error);
    }
}


const DisplayData = async(req,res)=>{
    const Data = await ProModel.find();
    res.send(Data);
}



module.exports = {
    InsertProducts,
    DisplayData
}