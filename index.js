// Calling in the dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// Getting routers
const projectRouter = require("./routes/project");

// Import database populator and depopulator
const { populateDB, clearDB, clearAllComments } = require("./populate.js");

// Initializing the app
const app = express();

// Setting up mongoose connection
const uri =
  "mongodb+srv://Prakhar:PrakharRajpali@cluster0.jsium.mongodb.net/BRWDExhibition?retryWrites=true&w=majority";
// "mongodb://localhost:27017/brwd";

mongoose
  .connect(uri, {
    useNewUrlParser: true,

    useCreateIndex: true,

    useUnifiedTopology: true,

    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Cross origin resource sharing
app.use(cors());

// Configuring the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Devtool for logging the requests
app.use(morgan("dev"));

// Setting view engine
app.set("view engine", "ejs");

// Serving static files
app.use(express.static(`${__dirname}/public`));

// for serving static html
app.use(express.static(`${__dirname}/static`));
app.use("/static", express.static(`${__dirname}/static`));
// for exhibition photos
app.use(express.static(`${__dirname}/Exhibition`));
app.use("/Exhibition", express.static(`${__dirname}/Exhibition`));

// Clear Database
// clearDB();

// Populate Database.
// populateDB();

//Clear all comments
// clearAllComments();

// Setting up the routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.use("/projects", projectRouter);

app.listen(process.env.PORT || 3000, () => {
  // console.log(
  //   `Server Started at ${process.env.PORT}
  // );
});
