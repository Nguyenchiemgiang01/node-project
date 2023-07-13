const {StatusCodes}=require('http-status-codes')

const mongoose = require("mongoose");
const bcrypt=require('bcrypt')
const Schema = mongoose.Schema;
const jwt=require('jsonwebtoken')
const User = new Schema(
    {
        // id: Schema.ObjectId,
        name: { type: String, required: [true,'Please provide name'],minlength:3 },
        email:{type:String ,require:[true,'Please provide email'],
                match:[/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ ,'Please provide valid email'],
                unique:true},
                
        password:{
            type:String,require:[true,'Please provide password'], minlength:6

        },
    },   
    
);

User.pre('save', async function(next){
    const salt=await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt)
    next()
})

User.methods.createJWT= function(){
    return jwt.sign(
        {userId:this._id,name:this.name},'jwtSecret',{expiresIn:'30d'}
       
    )
}

User.methods.comparePassword=async  function(candidatepassword){
   const isMatch=await bcrypt.compare(candidatepassword,this.password)
   return isMatch
}
module.exports = mongoose.model("User", User);
