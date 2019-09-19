const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {

    console.log(`🌎 ==> API server now on port ${PORT}!`);
  
  });

  var MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost/googlebooks";

  mongoose.connect(MONGO_URI, {useNewUrlParser: true});