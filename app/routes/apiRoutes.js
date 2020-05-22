var employees = require("../data/employees");
var projects = require("../data/projects");

module.exports = function(app) {
    app.get("/api/employee-survey", function(req, res) {
        res.json(employees);
    });

    app.get("/api/project-survey", function(req, res) {
        res.json(projects);
    });
    
    app.post("/api/employee-survey", function(req, res) {
        var newEmployee = req.body;
        employees.push(newEmployee);
        res.json(newEmployee);
    });

    app.post("/api/project-survey", function(req, res) {
        var newProject = req.body;
        projects.push(newProject);
        res.json(newProject);

        var projScores = [];
        for(var i=0; i < newProject.scores.length; i++) {
            projScores.push(parseFloat(newProject.scores[i]));
        }

            var x = projScores.map(function(a, b) {
                return Math.abs(a - employees[0].scores[b]);
            });
        console.log(x);
    });
};


