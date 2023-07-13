const Courses = require("../models/Course");

class SiteController {
    // [GET] /
  login(req,res){
    res.render('login/login',{layout:false})
  }
   home(req, res, next) {
        Courses.find({})
            .then((course) => res.render("home", { course: course }))
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
