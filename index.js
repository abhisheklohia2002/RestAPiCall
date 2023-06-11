
//Load Express 
require("dotenv").config()
const express = require("express");
const app = express();
const body_parser = require("body-parser");
const Models = require("./model/Schemma")
const RoutesApp = require("./routes/Routes");
const Product_Json = require("./product.json")
// app.use(body_parser.json());
const port = process.env.PORT || 5000
const cors = require("cors");
app.use(cors())
const mongoose = require("mongoose");

//connection Function
mongoose.connect(process.env.url_mongo,{
    // useCreateIndex: true,
    useNewUrlParser: true
}).then((res)=>{

    // Models.create(Product_Json)
    console.log(`DB is Connected`,)
})
.catch((er)=>{
    console.log(`Err========= at DB`,er)
})


//middelware for Router
app.use("/api/product",RoutesApp);


app.use(express.json())

// controller Function

// app.get('/',(req,res)=>{
//     res.send({"msg":"Hello World"})
// })

// app.post("/book",async(req,res)=>{
//     if(req.body.title !== "" || req.body.author !=="" || req.body.numberPages !=="" || req.body.publisher !==""){
//         const {title,author,numberPages,publisher} = req.body;

//    const data = new Models({
//    title,author,numberPages,publisher
//    })

// //    console.log(data)
// const checkOne = await Models.findOne({title,author,numberPages,publisher})
//    if(checkOne){
//  res.send({msg:"please try again"})
//    }
//    else {
//     const result =  await data.save();
//     // console.log(result)
//     return res.send({msg:"successful"})
//    }

// }
// })
// // Get  Request in Database for All  Book  Info
// app.get("/book",async(req,res)=>{
//     try {
//         const check = await Models.find();
//         console.log(check)
//         res.send(check)


//     } catch (error) {
//         console.log(error)
//     }
// })

// //get by ID for each Book 

// app.get('/book/:id',async(req,res)=>{
//     try {
//         const showById   = req.params.id;
 
//         const checkById = await Models.findById(showById);
//         console.log(checkById)
//         if(checkById){
//             return res.send(checkById)
//         }
//         else {
//             return res.send({msg:"Not Found"})
//         }
//     } catch (error) {
        
//     }
// })

// //Delete By Id in Book Collectio 
// app.delete('/book/:id',async(req,res)=>{
//     try {
//         const showById = req.params.id
//         const DeleteById = await Models.findOneAndDelete(showById);
//         if(DeleteById){
//             res.send({msg:"Delete Successful"})
//         }
//         else {
//             res.send({msg:"Not Delete"})
//         }

//     } catch (error) {
        
//     }
// })

// //Update or Patch request for Updating the Book Information
// app.put("/book/:id",async(req,res)=>{
//     try {
//         const updateById = req.params.id
//         const infoUpdate = req.body;
//       const  {title,author,numberPages,publisher} = req.body
//         const DataUpdate = await Models.findByIdAndUpdate(updateById, { title:title,author:author,numberPages:numberPages,publisher:publisher})
//         if(DataUpdate){
//             return res.send({msg:DataUpdate})
//         }
//         else {
// return res.send({msg:"Not Update"})
//         }
//     } catch (error) {
        
//     }
// })

app.listen(port,()=>{
    console.log(`server is Running at 5000`)
})



// mongodb+srv://madmax:madmax@cluster0.xllfpbm.mongodb.net/?retryWrites=true&w=majority