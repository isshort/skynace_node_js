const mongoose=require("mongoose");


const Schema=mongoose.Schema;


const userSchema=new Schema({

    name:{
        type:String,
        required:[true,"Please provide your name"]
    },
    last_name:{
        type:String,
        required:[true,"Please provide your lastname"]
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        match:[
            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
            "please provide a valid email"
        ]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "please provide a valid email"
        ]
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin","store","bank"]
    },
    password:{
        type:String,
        minlength:[6,"please provide a password with min length 6"],
        required:[true,"Please enter your password"],
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("User",userSchema);