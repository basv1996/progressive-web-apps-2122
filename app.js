//const http = require('http');
const express = require("express")
const process = require("process")
const app = express()
const path = require('path')
require("dotenv").config();


//this will sorve static files from public folder
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const router = require("./routes/route.js");
const PORT = process.env.PORT || 3000

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// // //using static files
app.use(express.static(__dirname + "/public"));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


let setCache = function (req, res, next) {
  // here you can define period in second, this one is 5 minutes
  const period = 60 * 60 * 5 

  // you only want to cache for GET requests
  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${period}`)
  } else {
    // for the other requests set strict no caching parameters
    res.set('Cache-control', `no-store`)
  }

  // remember to call next() to pass on the request
  next()
}

// now call the new middleware function in your app
app.use(setCache)

//using the router when you are on the index
app.use("/", router);

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

//Error handling
//this can return any content, but must be valled after all other app.use()
app.use(function (err, req, res) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  app.use(function (err, req, res) {
    res.status(404).render('pages/404', {
        title: 'this page does not exist'
    });
  });


