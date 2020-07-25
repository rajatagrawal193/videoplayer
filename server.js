const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
console.log('Inside server.js');


const port = 4200;

const app = express();

app.use(express.static(path.join(__dirname, 'distributable')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'distributable/index.html'))
});

app.listen(process.env.PORT || port , function () {
  console.log('Server running on localhost' + port);
})
