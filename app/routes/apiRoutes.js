var express = require("express");
var path = require("path");
var app = express();

module.exports = function(app) {
    var employees = require("../data/employees");

    app.get("/api/employees", function(req, res) {
        return res.json(employees);
    });
    
    app.post("/api/employees", function(req, res) {
        var newEmployee = req.body;
        newEmployee.routeName = newEmployee.name.replace(/\s+/g, "").toLowerCase();
        employees.push(newEmployee);
        res.json(newEmployee);
    });
};


