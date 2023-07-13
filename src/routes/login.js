const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/LoginController");

router.get('/', loginController.viewlogin);
router.post('/signin', loginController.signin)

module.exports = router;
