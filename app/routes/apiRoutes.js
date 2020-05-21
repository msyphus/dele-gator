module.exports = function(app) {
    var employees = require("../data/employees");

    app.get("/api/employees", function(req, res) {
        res.json(employees);
    });

    app.get("api/projects", function(req, res) {
        res.json(projects);
    });
    
    app.post("/api/employees", function(req, res) {
        var newEmployee = req.body;
        newEmployee.routeName = newEmployee.name.replace(/\s+/g, "").toLowerCase();
        employees.push(newEmployee);
        res.json(newEmployee);
    });
};


