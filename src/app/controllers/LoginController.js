const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticateError } = require("../../errors");
const User = require("../models/User");



class LoginController {

    viewlogin(req, res) {
        res.render('login/login' ,{layout:false})
    }
    signin=async (req, res)=>{
        const {email,password}=req.body
        if(!email||!password){
            throw new BadRequestError('Please provide email and password ')
        }

        const user=await User.findOne({email})
        
        if(!user){
            throw new UnauthenticateError('Invalidate user')
        }

        // const token=user.createJWT()
        // res.status(StatusCodes.OK).json({user:{name:user.name},token})
        
        const isPasswordCorrect=await user.comparePassword(password)
         
        if(!isPasswordCorrect){
            throw new UnauthenticateError('Invalidate password')
        }

        res.render("home")
    }
   
}

module.exports = new LoginController();
