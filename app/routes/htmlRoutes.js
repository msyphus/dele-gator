var path = require("path");

module.exports = function(app) {
    app.get("/projSurvey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/projSurvey.html"));
    });
    
    app.get("/empSurvey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });  

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
};

