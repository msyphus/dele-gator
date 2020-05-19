var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routes/htmlRoutes");
require("./app/routes/apiRoutes");

app.listen(port, function() {
    console.log("App is listening on Port " + port);
});