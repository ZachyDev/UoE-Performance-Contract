const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// POST - to send and generate PDF
app.post('/create-pdf', (req,res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('receipt.pdf', err => {
        if (err ) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
})

// GET - to fetch data
app.get('/fetch-pdf', (req,res) => {
    res.sendfile(`${__dirname}/receipt.pdf`);
})
app.listen(port, () => {
    console.log(`Listening to port ${ port }`);
})