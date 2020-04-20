// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');
// Setting up port
var PORT = process.env.PORT || 8080;

const apiRoutes = require("./routes");

//connnect to mongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/contact-me", //needs to have the same name in seed
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

// Creating express app and configuring middleware 
var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //for when connected in Heroku
  app.use(express.static("client/build"));
}

//api route
app.use("/api", apiRoutes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  
  // error handler middleware
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error message
    res.status(err.status || 500).json({
      error:
      {
        message: err.message || "Oops!  Something went wrong!"
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  