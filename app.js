const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/",express.static(__dirname+"/views"));


app.listen(port,() => [
    console.log("Listen on " + port)
])