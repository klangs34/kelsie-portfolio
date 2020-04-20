// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require('./models');
const cors = require('cors');
// Setting up port
var PORT = process.env.PORT || 8080;

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

//api route
app.post('/api/contact-me', (req, res) => {
    db.create(req.body)
        .then(response => res.json(response))
        .catch(error => console.log(error))
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
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
  