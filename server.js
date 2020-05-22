var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("app/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);

app.listen(port, function() {
    console.log("App is listening on Port " + port);
});
