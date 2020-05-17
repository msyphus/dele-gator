var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/empSurvey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(port, function() {
    console.log("App is listening on Port " + port);
});