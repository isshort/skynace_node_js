const express=require('express');
const bank=require("./bank");
const client=require("./client");
const store=require("./store");
const {registerUser}=require("./../controllers/user")
const router=express.Router();


router.use("/bank",bank);
router.use("/client",client);
router.use("/store",store);
router.post("/register",registerUser)


module.exports=router;