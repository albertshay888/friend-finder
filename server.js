const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");


let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () => {
    console.log("Listening on PORT:" + PORT);
});