const express = require("express");
const app = express();
const fs = require("fs");
const handlebars = require('handlebars');
const cors = require('cors');
const path = require('path');
const dataPath = './data/data.json';

app.get("/express", (req, res) => {
    indexPath = './public/express/index.html';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            const jsonData = JSON.parse(data);
            fs.readFile(indexPath, 'utf8', (err, html) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Server Error');
                } else {
                    const template = handlebars.compile(html);
                    const renderedHtml = template(jsonData);
                    res.send(renderedHtml);
                }
            });
        }
    });
});

app.get("/cliente_servidor", (req, res) => {
    indexPath = './public/cliente_servidor/index.html';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            fs.readFile(indexPath, 'utf8', (err, html) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Server Error');
                } else {
                    res.send(html);
                }
            });
        }
    });
});

app.get("/mounstruos", (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            fs.readFile(indexPath, 'utf8', (err, html) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Server Error');
                } else {
                    const jsonData = JSON.parse(data);
                    res.json(jsonData);
                }
            });
        }
    });
});

app.use(cors());
app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;