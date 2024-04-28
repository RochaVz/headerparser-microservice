// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/:date?", function (req, res) {
  var s = "12-25-2015";

  var unix = new Date(s).getTime();
  var utc = new Date(s).toUTCString();

  res.json({ unix: parseInt(unix), utc: utc });

});
const express = require('express');
const app = express();

app.enable('trust proxy');

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({ ipaddress, language, software });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// request to /api/whoami 
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress:req.connection.remoteAddress,
    language:req.headers['accept-language'],     
    software:req.headers['user-agent']
    })
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
