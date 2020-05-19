var express = require("express");
var path = require("path");
var app = express();

function htmlRoutes() {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
    
    app.get("/empSurvey", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });
};

module.exports = {
    htmlRoutes: htmlRoutes()
}
