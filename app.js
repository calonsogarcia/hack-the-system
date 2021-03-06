// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const projectName = "hack-the-system";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const user = require("./routes/auth.routes");
app.use("/user", user);

const userDescription = require("./routes/userDescription.routes");
app.use("/user/description", userDescription);

const learningRoutes = require('./routes/learningRoutes.routes');
app.use("/learning_routes", learningRoutes);

const courseRoutes = require('./routes/course.routes');
app.use("/course_routes", courseRoutes);

const exerciseRoutes = require('./routes/exercise.routes');
app.use("/exercise_routes", exerciseRoutes);

const theoryRoutes = require('./routes/theory.routes');
app.use('/theory', theoryRoutes);

app.get('/*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(404);
    res.end(JSON.stringify({message: "Page not found"}));
})
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
// require("./error-handling")(app);

module.exports = app;
