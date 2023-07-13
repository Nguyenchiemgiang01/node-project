const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");


router.get("/search", siteController.search);
router.get("/", siteController.login);

module.exports = router;
