const mongoose = require ("mongoose")
const UserSchema = new mongoose.Schema({
     
    name:{
      type:String,
      required :true,
 
    },
    age:{
        type:Number,
 
    },

    username:{
        type: String,
      
    },
    country:{
        type: String,
    },


});

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel 