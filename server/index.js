"use strict";

const morgan = require('morgan')
 

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));


// The in-memory database of tweets. It's a basic object with an array in it.
const db = require("./lib/in-memory-db");



// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require("./lib/data-helpers.js")(db);

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);



app.post("/tweets", (response, request) => {
  const newTweetText = req.params.tw;
  console.log("req parasms: ", req.params);
  console.log("newTweetText", newTweetText)

})


// Server Setup!

app.listen(PORT, () => {
  console.log("Lloyd's Tweeter app listening on port " + PORT);
});