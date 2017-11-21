const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/cookies",express.static(__dirname+"/views"));



app.listen(process.env.PORT || 3000);