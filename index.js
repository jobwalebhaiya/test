require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set(express.static("public"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req.query);
    res.send("Here you go");
});

app.listen(3000, () => {
    console.log('Server Started');
});