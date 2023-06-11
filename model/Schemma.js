const mongoose = require("mongoose");



const BookSchema =new  mongoose.Schema({
name:{
    type:String,
   required:true
}
,
price:{
    type:Number,
    required:[true,"None"]
},
feature:{
    type:Boolean,
    default:true,

}
,
rating:{
    type:Number,
    required:[true,"None"] ,

    default:4.5
},
Image:{
    type:String,
    default:"https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg"
}
,
createdAt:{
    type:Date,
    default:Date.now()
},
company:{
    type:String,
    enum:{
        values:["Sumsang","Apple","Asus","Lenovo","Dell"],
        message:`value is not Supported`
    },

}
})


const model= new mongoose.model("Book",BookSchema);

module.exports = model;
