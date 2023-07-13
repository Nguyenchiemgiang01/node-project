const {StatusCodes}= require('http-status-codes')
const CustomAPIError=require('./custom-api')

class UnauthenticateError extends CustomAPIError{
    constructor(message){
        super(message)
        // this.StatusCode=StatusCodes.UNAUTHORIZED
}
}
module.exports=UnauthenticateError