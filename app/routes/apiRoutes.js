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
        var diffs = [];
        var sums = [];
        var result = 0;
        for(var i=0; i < newProject.scores.length; i++) {
            projScores.push(parseFloat(newProject.scores[i]));
        }

        for(var j = 0; j < employees.length; j++) {
            var x = projScores.map(function(a, b) {
                return Math.abs(a - employees[j].scores[b]); 
            });
            diffs.push(x);
        }

        for(var k = 0; k < diffs.length; k++) {
            for(var l = 0; l < diffs[k].length; l++) {
                result += diffs[k][l];
            }
            sums.push(result);
            result = 0;
        }
        var matchSum = Math.min(...sums); //destructure array so Math.min will work
        var matchIndex = sums.indexOf(matchSum);
        var bestMatch = employees[matchIndex];
        projects.push(bestMatch);
    });
};


