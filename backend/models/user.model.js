const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },

    email:{
        type:String
    },

    password:{
        type:String
    },

    phoneNumber:{
        type:String
    },

    age:{
        type:Number
    },
    role:{
        type:String
    }
}, {timeStamps:true});

const userModel = mongoose.model("user", userSchema);

module.exports={
   userModel
}