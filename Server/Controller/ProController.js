

const InsertProducts = async(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    res.send("okk");
}




module.exports = {
    InsertProducts
}