const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const meRouter = require("./me");
const loginRouter = require("./login");
const signupRouter=require("./signup");
function route(app) {
    app.use('/signup', signupRouter);
    app.use('/login', loginRouter);
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
