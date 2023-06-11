
require("dotenv").config()
const express = require("express");
const app = express();
const Model_Products = require("./model/Schemma");
const mongoose= require("mongoose");
const Product_Json = require("./product.json")


const Start = async()=>{
    try {
        await mongoose.connect(process.env.url_mongo);
        await Model_Products.create(Product_Json);
        console.log("Successful Store")
    } catch (error) {
        console.log("Er==============",error)
    }
}


Start()