const express = require("express");
const router = express.Router();

const signupController = require("../app/controllers/SignupController");
const userController=require("../app/controllers/UserController")

router.get('/', signupController.viewsignup);
router.post('/register',userController.register)
module.exports = router;
