const express = require('express');



const router = express.Router();


router.get("/", (req, res) => {


    res.send("Inside of Store Router");


})

module.exports=router;