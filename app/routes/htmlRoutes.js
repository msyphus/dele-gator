var path = require("path");

module.exports = function(app) {
    app.get("/project-survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/projSurvey.html"));
    });
    
    app.get("/employee-survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });  

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
};

