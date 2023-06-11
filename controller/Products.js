const Model = require("../model/Schemma");



const GetAllProduct = async(req,res)=>{
const {name,sort} = req.query;
const myObj = {};
let page = +req.query.page || 1;
let limit = +req.query.limit || 3;
let skip = (page-1)*limit;


    try {

        if(name){
            myObj.name = name;

        }
        let apiCall = Model.find(myObj);

        apiCall = apiCall.skip(skip).limit(limit)
        if(sort){
           let sortFix = sort.replace(","," ");
apiCall = apiCall.sort(sortFix)
        }
const find_detail = await apiCall;
res.send({msg:find_detail});

       
    } catch (error) {
        console.log(`ER============== in GetAllProducts`,error)
    }
}
module.exports = {
    GetAllProduct
}