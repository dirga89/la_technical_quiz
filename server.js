const express = require('express');

const powersum = require('./controllers/powersum');
const timeconversion = require('./controllers/timeconversion');
const camelcase = require('./controllers/camelcasecount');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.post('/powersum', (req, res) => { powersum.powerSum(req, res) });
app.post('/timeconversion', (req, res) => { timeconversion.timeConversion(req, res) })
app.post('/camelcasecount', (req, res) => { camelcase.camelCaseCount(req, res) });

app.listen(port, () =>
{
    console.log(`server running on ${port}.`);
});