// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
// =============================================================
var app = express();
var PORT = 3000;

app.use(express.static('public'))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/data', function(req, res) {
   fs.readFile('./us.json', 'utf8', function (err, data) {
       res.send(data);
       console.log("yo", data)
   });
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
