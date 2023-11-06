const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exp = require('constants');
const app = express();

app.use(bodyParser.json());
