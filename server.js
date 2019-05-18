const express = require("express");
const path = require("path");
const routes = require("./routes");
var mongojs = require("mongojs");
var logger = require("morgan");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});





// *** Donation recording code starts here.
// Set the donation app with morgan.
app.use(logger("dev"));
// Make public a static folder
app.use(express.static("public"));

// Database configuration
var databaseUrl = "donationTaker";
var collections = ["donations"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// ======

// Simple index route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// Handle form submission, save submission to mongo
app.post("/submit", function(req, res) {
  console.log(req.body);
  // Insert the donation into the donations collection
  db.donations.insert(req.body, function(error, saved) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the donation back to the browser
      // This will fire off the success function of the ajax request
      res.send(saved);
    }
  });
});

// Retrieve results from mongo
app.get("/all", function(req, res) {
  // Find all donations in the donations collection
  db.donations.find({}, function(error, found) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send json of the donations back to user
      // This will fire off the success function of the ajax request
      res.json(found);
    }
  });
});

// Select just one donation by an id
app.get("/find/:id", function(req, res) {
  // When searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))

  // Find just one result in the donations collection
  db.donations.findOne(
    {
      // Using the id in the url
      _id: mongojs.ObjectId(req.params.id)
    },
    function(error, found) {
      // log any errors
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the donation to the browser
        // This will fire off the success function of the ajax request
        console.log(found);
        res.send(found);
      }
    }
  );
});

// Update just one donation by an id
app.post("/update/:id", function(req, res) {
  // When searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))

  // Update the donation that matches the object id
  db.donations.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      // Set the dollars, donation and modified parameters
      // sent in the req body.
      $set: {
        dollars: req.body.dollars,
        donation: req.body.donation,
        modified: Date.now()
      }
    },
    function(error, edited) {
      // Log any errors from mongojs
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

// Delete One from the DB
app.get("/delete/:id", function(req, res) {
  // Remove a donation using the objectID
  db.donations.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    function(error, removed) {
      // Log any errors from mongojs
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        console.log(removed);
        res.send(removed);
      }
    }
  );
});

// Clear the DB
app.get("/clearall", function(req, res) {
  // Remove every donation from the donations collection
  db.donations.remove({}, function(error, response) {
    // Log any errors to the console
    if (error) {
      console.log(error);
      res.send(error);
    }
    else {
      // Otherwise, send the mongojs response to the browser
      // This will fire off the success function of the ajax request
      console.log(response);
      res.send(response);
    }
  });
});

// ****Donation recording code ends here.

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});