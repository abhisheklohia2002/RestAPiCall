const express =require("express");
const router = express.Router();
const UseController = require("../controller/Products")



router.route("/").get(UseController.GetAllProduct);



//testing purpose ;
// router.route("/testing").get(GetAllProductTesting);


module.exports = router;
