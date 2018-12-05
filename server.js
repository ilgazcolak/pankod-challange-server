const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var data = require('./data/sample.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send("OK");
})

app.get('/get-series', (req, res) => {
    var seriesData = [];
    for(i in data.entries){
        if(data.entries[i].programType === "series") {
            seriesData.push(data.entries[i])
        }
    }
    res.json(seriesData);
});

app.get('/get-movies', (req, res) => {
    var moviesData = [];
    for(i in data.entries){
        if(data.entries[i].programType === "movie") {
            moviesData.push(data.entries[i])
        }
    }
    res.json(moviesData);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server running on port ${port} `);
});
