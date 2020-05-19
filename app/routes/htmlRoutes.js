var express = require("express");
var path = require("path");
var app = express();

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/home.html"));
    });
    
    app.get("/empSurvey", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/survey.html"));
    });  
};

