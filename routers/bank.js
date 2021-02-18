const express = require('express');
const {registerBank}=require("./../controllers/bank");


const router = express.Router();


router.get("/", registerBank);

module.exports=router;