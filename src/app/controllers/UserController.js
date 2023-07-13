const User =require('../models/User')

const bcrypt=require('bcrypt')

class UserController {
    // [GET] /
     register = async (req,res)=>{
        const {username, email ,password}=req.body
        await User.create({name:username , email , password})
        res.send('ok')
    }
    

    // [GET] /search
    login(req, res) {
        res.render("search");
    }
}

module.exports = new UserController();

