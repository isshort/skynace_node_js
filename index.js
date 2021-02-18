const express=require("express");
const dotenv=require("dotenv");
const app=express();
const routers=require("./routers")

// Enviroments
dotenv.config({
    path:"./config/env/config.env"
});

const PORT= process.env.PORT;

app.use("/api",routers)

app.listen(PORT,()=>{
    console.log("App started on ",PORT);
})