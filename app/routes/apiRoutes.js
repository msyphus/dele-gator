var employees = require("../data/employees");
var projects = require("../data/projects");

module.exports = function(app) {
    app.get("/api/employee-survey", function(req, res) {
        return res.json(employees);
    });

    app.get("api/project-survey", function(req, res) {
        res.json(projects);
    });
    
    app.post("/api/employee-survey", function(req, res) {
        var newEmployee = req.body;
        employees.push(newEmployee);
        res.json(newEmployee);
    });

    // app.post("/api/project-survey", function(req, res) {
    //     projects.push(req.body);
    // });
};


